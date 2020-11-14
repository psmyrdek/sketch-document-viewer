const I18n = {
    defaults: {
        loading: 'Fetching data...',
        error: 'An unexpected error occurred. Please try again in a while.'
    },
    common: {
        header: 'Back to homepage'
    },
    home: {
        header: 'Please provide the document id (shortId)',
        cta: 'Open'
    },
    artboard: {
        loading: 'Fetching artboard details...',
        error: 'We couldn\'t fetch artboard details - please try again in a while.',
        missing: {
            header: 'This artboard is not available',
            details: 'Make sure the artboard you are trying to open still exists'
        },
        actions: {
            close: 'Close preview',
            prev: 'Show previous artboard',
            next: 'Show next artboard'
        }
    },
    document: {
        loading: 'Fetching document details...',
        error: 'We couldn\'t fetch document details - please try again in a while.'
    }
}

export default I18n;
