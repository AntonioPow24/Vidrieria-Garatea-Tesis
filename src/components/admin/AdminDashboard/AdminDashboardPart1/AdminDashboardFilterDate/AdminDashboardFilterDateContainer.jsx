import AdminDashboardFilterMonth from "./AdminDashboardFilterMonth"
import AdminDashboardFilterYear from "./AdminDashboardFilterYear"

const AdminDashboardFilterDateContainer = () => {

    return (
        <div className="flex gap-[12px] justify-between">
            <AdminDashboardFilterMonth />

            <AdminDashboardFilterYear />
        </div>
    )
}

export default AdminDashboardFilterDateContainer
