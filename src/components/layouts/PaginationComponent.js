import React from 'react';

const PaginationComponent = (_props) => {
  return (
    <div class="uk-margin-large-top uk-text-small">
      <ul class="uk-pagination uk-flex-center uk-text-500 uk-margin-remove" data-uk-margin>
        <li><a href="#"><span data-uk-pagination-previous></span></a></li>
        <li><a href="#">1</a></li>
        <li class="uk-disabled"><span>...</span></li>
        <li><a href="#">5</a></li>
        <li><a href="#">6</a></li>
        <li class="uk-active"><span>7</span></li>
        <li><a href="#">8</a></li>
        <li><a href="#"><span data-uk-pagination-next></span></a></li>
      </ul>
    </div>
  );
};

export default PaginationComponent;
