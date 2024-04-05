import { format } from 'date-fns';

export const formatDate = isoDate => {
    const date = new Date(isoDate);
    return format(date, "MMM do, ''yy @ H:mm:ss");
};
