import CountChart from "@/components/CountChart";
import UseCard from "@/components/UseCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full lg:w-2/3 flex flex-col gap-8">
        {/* User Statistics Card */}
        <div className="flex gap-4 justify-between flex-wrap">
          <UseCard type="student"></UseCard>
          <UseCard type="teacher"></UseCard>
          <UseCard type="parent"></UseCard>
          <UseCard type="staff"></UseCard>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row">
          <div className="w-full lg:w-1/3 h-[450px]">
            <CountChart></CountChart>
          </div>
          <div className="w-full lg:w-2/3 h-[450px]"></div>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
export default AdminPage;
