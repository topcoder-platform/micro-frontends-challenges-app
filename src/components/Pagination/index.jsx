import React, { useMemo, useRef } from "react";
import PT from "prop-types";
import Dropdown from "../Dropdown";
import {
  PAGINATION_PER_PAGES,
  PAGINATION_MAX_PAGE_DISPLAY,
} from "../../constants";
import * as utils from "../../utils";
import IconArrow from "../../assets/icons/arrow.svg";

import "./styles.scss";

const N = PAGINATION_MAX_PAGE_DISPLAY;

const createDisplayPages = (p, n) => {
  const pages = [];
  for (
    let start = utils.clamp(p - N, 0, n),
      end = utils.clamp(p + N, 0, n),
      i = start;
    i < end;
    i += 1
  ) {
    pages.push(i);
  }
  return pages.slice(-N);
};

/**
 * Pagination with the first page index being as 0 and the last page index being as `total - 1`
 */
const Pagination = ({ length, pageIndex, pageSize, onChange }) => {
  const total = Math.ceil(length / pageSize);
  const perPageOptions = utils.createDropdownOptions(PAGINATION_PER_PAGES);
  utils.setSelectedDropdownOption(perPageOptions, `${pageSize}`);

  const onChangePageSize = (options) => {
    const selectedOption = utils.getSelectedDropdownOption(options);
    const newPageSize = +selectedOption.label;
    onChange({ pageIndex: 0, pageSize: newPageSize });
  };

  const onChangePageIndex = (newPageIndex) => {
    onChange({ pageIndex: newPageIndex, pageSize: pageSize });
  };

  const next = () => {
    if (pageIndex < total) {
      onChange({ pageIndex: pageIndex + 1, pageSize: pageSize });
    }
  };
  const previous = () => {
    if (pageIndex > 0) {
      onChange({ pageIndex: pageIndex - 1, pageSize: pageSize });
    }
  };

  const propsRef = useRef();
  propsRef.current = { pageIndex };

  const displayPages = useMemo(() => {
    const newTotal = Math.ceil(length / pageSize);
    const initDisplayPages = createDisplayPages(propsRef.current.pageIndex, newTotal);
    return initDisplayPages;
  }, [length, pageSize]);


  const updateDisplayPages = useMemo(() => {
      const start = displayPages[0];
      const end = displayPages[displayPages.length - 1];

      const _updateDisplayPages = [];
      if (pageIndex < start) {
        for (let i = pageIndex; i < pageIndex + N; i += 1) {
          _updateDisplayPages.push(i);
        }
      } else if (pageIndex > end) {
        for (let i = pageIndex; i > pageIndex - N; i -= 1) {
          _updateDisplayPages.unshift(i);
        }
      } else {
        _updateDisplayPages.push(...displayPages);
      }

      return _updateDisplayPages;
  }, [pageIndex, displayPages]);

  const formatPage = (p) => `${p + 1}`;

  return (
    <div styleName="pagination">
      <div styleName="per-page">
        <Dropdown
          options={perPageOptions}
          onChange={onChangePageSize}
          size="xs"
        />
      </div>
      <ul styleName="pages">
        <li styleName={`page previous ${pageIndex === 0 ? "hidden" : ""}`}>
          <button onClick={previous}>
            <span styleName="arrow">
              <IconArrow />
            </span>{" "}
            PREVIOUS
          </button>
        </li>
        {updateDisplayPages.map((p) => (
          <li styleName={`page ${p === pageIndex ? "active" : ""}`} key={p}>
            <button
              onClick={() => {
                onChangePageIndex(p);
              }}
            >
              {formatPage(p)}
            </button>
          </li>
        ))}
        <li
          styleName={`page next ${
            pageIndex === total - 1 || length === 0 ? "hidden" : ""
          }`}
        >
          <button onClick={next}>
            NEXT{" "}
            <span styleName="arrow">
              <IconArrow />
            </span>
          </button>
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  length: PT.number,
  pageIndex: PT.number,
  pageSize: PT.number,
  onChange: PT.func,
};

export default Pagination;
