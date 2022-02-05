export const getAge = (birthday) => {
    if (!birthday) {
        return "";
    }

    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let dob = new Date(birthday);
    let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate());
    let age;

    age = today.getFullYear() - dob.getFullYear();
    if (today < dobnow) {
        age = age - 1;
    }
    return age;
}

export const getUpdatedAt = (updatedAt) => {
    if (!updatedAt) {
        return "";
    }

    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());
    let timeUpdatedAt = new Date(updatedAt);
    return `Обновлено ${today.getHours() - timeUpdatedAt.getHours()} часов назад`;
}

export const getMonthWork = (from, to) => {
    let dateFrom = new Date(from);
    let dateTo = new Date(to);
    return dateTo.getMonth() - dateFrom.getMonth() === 0 ? 1 : dateTo.getMonth() - dateFrom.getMonth();
}

export function getYearsOrYear(age) {
    if (!age) {
        return "";
    }

    let txt;
    let count = age % 100;
    if (count >= 5 && count <= 20) {
        txt = 'лет';
    } else {
        count = count % 10;
        if (count == 1) {
            txt = 'год';
        } else if (count >= 2 && count <= 4) {
            txt = 'года';
        } else {
            txt = 'лет';
        }
    }
    return txt;
}