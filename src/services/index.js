import request from "$utils/request";

export const getSubject = () => request(`${import.meta.env.VITE_STAFF_PATH}api/game/subject`)
