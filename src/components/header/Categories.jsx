import { FaAngleDown } from 'react-icons/fa';
import React from 'react';

const Categories = () => {
  return (
    <div className="d-flex justify-content-center">
      <ul className="list-unstyled d-flex text-secondary small">
        <li style={{ marginLeft: "30px", cursor: "pointer" }}>
          <span>نوجوان</span>
        </li>
        <li style={{ marginLeft: "30px", cursor: "pointer" }}>
          <span>ادبیات</span>
        </li>
        <li style={{ marginLeft: "30px", cursor: "pointer" }}>
          <span>رمان</span>
        </li>
        <li style={{ marginLeft: "30px", cursor: "pointer" }}>
          <span>خارجی</span>
        </li>
        <li style={{ marginLeft: "30px", cursor: "pointer" }}>
          <span>تاریخ</span>
        </li>
        <li style={{ marginLeft: "30px", cursor: "pointer" }}>
          <span>هنر</span>
        </li>
        <li style={{ marginLeft: "30px", cursor: "pointer" }}>
          <span>
            سایر دسته‌بندی‌ها
            <FaAngleDown />
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Categories;
