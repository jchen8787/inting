// Part 1, simple DFS to extract all text content, then compare

function getTextContent(DOMNode) {
    let text = '';

    if (DOMNode.children.length === 0) {
        return DOMNode.text;
    }

    DOMNode.children.forEach((child) => {
        text += getTextContent(child);
    });

    return text;
}

function compareText(root1, root2) {
    return getTextContent(root1) === getTextContent(root2);
}

const main = () => {
    const root1 = {
        text: '', children: [
            { text: 'a', children: [] },
            {
                text: '', children: [
                    { text: 'bc', children: [] },
                    {
                        text: '', children: [
                            { text: 'def', children: [] },
                            { text: 'g', children: [] },
                        ]
                    },
                ]
            },
        ]
    };

    const root2 = {
        text: '', children: [
            { text: 'abcd', children: [] },
            {
                text: '', children: [
                    { text: 'e', children: [] },
                    { text: 'fg', children: [] },
                ]
            }
        ]
    };

    console.log(getTextContent(root1))
    console.log(getTextContent(root2))
    console.log(compareText(root1, root2));
};

main();