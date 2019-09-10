// Part 2, early exist as soon as strings no longer match

function pushChildrenOrReturnText(stack) {
    while (stack.length !== 0) {
        const node = stack.pop();

        if (node.children.length === 0) {
            return node.text;
        }

        for (let i = node.children.length - 1; i >= 0; i--) {
            stack.push(node.children[i]);
        }
    }

    return '';
}

function optimalCompareText(root1, root2) {
    const stack1 = [root1];
    const stack2 = [root2];
    let text1 = '';
    let text2 = '';

    let i = 0;
    while (stack1.length !== 0 && stack2.length !== 0) {
        text1 += pushChildrenOrReturnText(stack1);
        text2 += pushChildrenOrReturnText(stack2);

        const minLength = Math.min(text1.length, text2.length);
        for (; i < minLength; i++) {
            if (text1[i] !== text2[i]) {
                return false
            }
        }
    }

    if (stack1.length === 0) {
        while (stack2.length !== 0) {
            text2 += pushChildrenOrReturnText(stack2);
            for (; i < text2.length; i++) {
                if (text1[i] !== text2[i]) {
                    return false;
                }
            }
        }
    } else {
        while (stack1.length !== 0) {
            text1 += pushChildrenOrReturnText(stack1);
            for (; i < text1.length; i++) {
                if (text1[i] !== text2[i]) {
                    return false;
                }
            }
        }
    }

    if (text1.length !== text2.length) {
        return false;
    }

    return true;
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
                            { text: 'ghi', children: [] },
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
                    { text: 'fghi', children: [] },
                ]
            }
        ]
    };

    console.log(optimalCompareText(root1, root2));
};

main();