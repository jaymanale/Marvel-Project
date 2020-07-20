import React from 'react';

const CategoryInfo = (props) => {
  const category = ['comics', 'creators', 'events', 'series', 'stories'];

  return (
    <React.Fragment>
      <CategoryDetails categoryArray={category} object={props} />
    </React.Fragment>
  );
};

const CategoryDetails = (props) => {
  const { categoryArray, object } = props;
  return (
    <div>
      {categoryArray.map((category) => (
        <div key={category}>
          {object[category] &&
          object[category].items &&
          object[category].items.length ? (
            <div>
              <p className="text-strong mb-0 textColorGradiant">
                {[category]} - <span>{object[category].available}</span>
              </p>
              <div>
                <ul className="list-group">
                  {object[category].items.map((item) => (
                    <li className="list-group-item" key={item.resourceURI}>
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryInfo;
