import AdminDashboardPart1 from "../../components/admin/AdminDashboard/AdminDashboardPart1/AdminDashboardPart1"
import AdminDashboardPart2 from "../../components/admin/AdminDashboard/AdminDashboardPart2/AdminDashboardPart2"

const Dashboard = () => {
  return (
    <section className="flex gap-[20px] p-[20px] h-[100dvh] 1300:flex-col 1300:overflow-y-auto DashboardScrolling">
      <AdminDashboardPart1 />

      {/* SEGUNDA PARTE */}
      <AdminDashboardPart2 />
    </section>
  )
}

export default Dashboard
