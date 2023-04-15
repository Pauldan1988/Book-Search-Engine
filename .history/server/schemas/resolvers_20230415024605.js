const { Book, User } = require('../models');

const resolvers = {
    Query: {
        user: async () => {
            return Book.find({})
        },
        
    }
}