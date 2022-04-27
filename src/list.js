import AddForm from "./AddForm";
import AddList from "./AddList";
import React, { useState} from "react";


const List = () => {
  const [data, setData] = useState([]);

  return (
    <div className="list">
      <AddForm add={setData} />
      <AddList listData={data} deleteData={setData} />
      <center>
        <a href="/">返回首頁</a>
      </center>
    </div>
  );
};

export default List;
