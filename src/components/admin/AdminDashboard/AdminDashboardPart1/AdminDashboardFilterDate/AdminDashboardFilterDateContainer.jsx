import AdminDashboardFilterMonth from "./AdminDashboardFilterMonth"
import AdminDashboardFilterYear from "./AdminDashboardFilterYear"

const AdminDashboardFilterDateContainer = () => {

    return (
        <div className="flex gap-[10px] justify-between 1780:justify-start">
            <AdminDashboardFilterMonth />

            <AdminDashboardFilterYear />
        </div>
    )
}

export default AdminDashboardFilterDateContainer
