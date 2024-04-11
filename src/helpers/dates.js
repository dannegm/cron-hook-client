import { format } from 'date-fns';

export const formatDate = isoDate => {
    const date = new Date(isoDate);
    return format(date, "MMM d, ''yy · HH:mm:ss");
};

export const formatTimestamp = isoDate => {
    const date = new Date(isoDate);
    return format(date, 'yyyy-MM-dd @ HH:mm:ss');
};
