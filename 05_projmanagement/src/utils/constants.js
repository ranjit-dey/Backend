export const UserRoleEnum = {
    ADMIN: "admin",
    PROJECT_ADMIN: "project_admin",
    MEMBER: "member",
};

export const AvailableUserRole = Object.keys(UserRoleEnum);

export const TaskStatusEnum = {
    TODO: "todo",
    IN_PROGRESS: "in_progress",
    DONO: "done",
};

export const AvailableTaskStatuses = Object.keys(TaskStatusEnum);
