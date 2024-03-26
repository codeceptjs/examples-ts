let Helper = codecept_helper;

const toString = sel => {
    if (typeof(sel) === 'string') return sel
    if (typeof(sel) === 'object') {
        return sel.css || sel.xpath
    }
}

class CustomHelper extends Helper {
    private client;
    constructor (config) {
        super (config);
        this.client = this.helpers['Puppeteer'];
    }

    async hover(selector) {
        await this.client.page.hover(toString(selector))
    }

    async typeText(text) {
        await this.client.page.keyboard.type(text)
    }

}

export = CustomHelper;
