import React from "react";
import { useRecoilState } from "recoil";
import { Categories, categoryState } from "../atoms";

const Category = () => {
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setCategory(value as any);
  };
  return (
    <>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
    </>
  );
};

export default Category;
