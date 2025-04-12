import { testBookings } from '../pages/vendor/chat/ChatList';

const testDataProvider = {
    getList: (resource) => {
        return Promise.resolve({
            data: testBookings,
            total: testBookings.length,
        });
    },
    getOne: (resource, { id }) => {
        const booking = testBookings.find(b => b.id === parseInt(id));
        return Promise.resolve({ data: booking });
    },
    create: () => Promise.resolve({ data: { id: 0 } }),
    update: (resource, { data }) => Promise.resolve({ data }),
    delete: (resource, { id }) => Promise.resolve({ data: { id } }),
    deleteMany: (resource, { ids }) => Promise.resolve({ data: ids }),
    updateMany: (resource, { ids, data }) => Promise.resolve({ data: ids }),
    getMany: () => Promise.resolve({ data: testBookings }),
    getManyReference: () => Promise.resolve({ data: testBookings, total: testBookings.length }),
};

export default testDataProvider;