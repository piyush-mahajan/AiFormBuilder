import React from "react";
import CreateForm from "./_components/CreateForm";

const Dashboard = () => {
  return (
    <>
      <div className="p-10">
        <h2 className="font-bold text-3xl flex justify-between align-center ">
          Dashboard
          <CreateForm />
        </h2>
      </div>
      ;
    </>
  );
};

export default Dashboard;
