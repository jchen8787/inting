function ListNode(val) {
    this.val = val
    this.next = null
}

function createLinkedList(arr) {
    const dummyHead = new ListNode('dummy')
    let pointer = dummyHead

    for (element of arr) {
        const node = new ListNode(element)
        pointer.next = node
        pointer = pointer.next
    }

    return dummyHead.next
}

function stringifyLinkedList(head) {
    let res = ''

    while (head) {
        res += head.val
        head.next && (res += ', ')

        head = head.next
    }

    return res
}

function partitionList(head, x) {
    const beforeHead = new ListNode('dummy')
    const afterHead = new ListNode('dummy')

    let before = beforeHead
    let after = afterHead

    while (head) {
        if (head.val < x) {
            before.next = head
            before = before.next
        } else {
            after.next = head
            after = after.next
        }

        head = head.next
    }

    after.next = null
    before.next = afterHead.next

    return beforeHead.next
}

const head = createLinkedList([5, 3, 8, 6, 1, 4, 5, 7, 9, 3, 1])

const res = partitionList(head, 4)
console.log(stringifyLinkedList(res))
