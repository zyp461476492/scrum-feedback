const feedbackSchema = {
    title: 'feedbackSchema',
    version: 0,
    description: 'feedback',
    type: 'object',
    properties: {
        feedback: {
            type: "string"
        },
        type: {
            type: "string"
        }
    }
};

export default feedbackSchema;