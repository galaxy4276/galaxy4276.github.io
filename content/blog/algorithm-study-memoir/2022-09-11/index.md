---
title: 2022-09-11 회고록
date: "2022-09-11T21:20:03.284Z"
description: "9번 째 알고리즘 스터디 회고록"
---

무작정 알고리즘 스터디를 시작한 지 9주차가 되었습니다.

시작 이후로 인원이 한 두명씩 늘어나면서, 지치는 사람도 생길거고 진행도 더뎌질 줄 알았는데

모든인원이 열심히 진행해주시는 덕분에 문제없이 여기까지 온 듯합니다.

이번 주차때부터 깃 블로그에 회고록을 작성중인데 급하게 [React-Gatsby](https://www.gatsbyjs.com/docs/) 를 활용해서 글을 작성해봅니다.

## 206. Reverse Linked List ( LeetCode )
해당 문제는 연결 리스트를 거꾸로 뒤집는 문제였는데 도전부터 상당히 애먹었는데

연결 리스트 자료구조를 작성할 줄 알고, 순회할 줄 알았지만 활용할 줄 몰랐습니다.

> 다음과 같은 연결 리스트 순회구조가 있다면..
>
>     1 -> 2 -> 3 -> 4 -> 5
> 다음과 같은 구조로 바꾸어야 한다.
>     
>     5 -> 4 -> 3 -> 2 -> 1


### 재귀를 활용한 풀이 ( Recursion )
```Java
class Solution {
  public ListNode reverseListByRecursive(ListNode head) {
      if (head == null || head.next == null) return head;
      ListNode resultNode = reverseListByRecursive(head.next);
      head.next.next = head;
      head.next = null;
      return resultNode;
  }
```
재귀방식을 활용한 구현입니다.

마지막 노드까지 재귀 함수를 생성하고 실행하면서, 마지막 노드 전 함수부터 참조를 거꾸로 수행합니다.
```Java
    head.next.next = head;
    head.next = null;
```

재귀함수의 종료문에 해당하는 마지막 노드가 반환되어 기존 연결리스트가 역순 구조로 이루어지게 됩니다.

### 순회를 이용한 풀이 ( Iteration )
```Java
  public ListNode reverseListByIteration(ListNode head) {
    ListNode parent = null;
    while (head != null) {
      ListNode curr = head;
      head = head.next;
      curr.next = parent;
      parent = curr;
    }
    return parent;
  }
```

역순으로 참조할 빈 노드 값(parent)을 생성해두고, head 의 사본(curr)을 생성한 상태에서 head 원본은 다음 노드를 참조하게 합니다.

head의 사본(curr) 을 처음에 비어있던 노드 값과 연결해주고, 빈 노드 값(parent) 에 사본(curr) 을 할당합니다.

순회가 돌면서, parent 는 다음 노드의 값에게 참조되는 구조가 됩니다.

curr 과 head 를 따로 분리한 이유는 head 의 next 값이 손상되지 않으면서 각 순회의 head 값의 next를 조작시키기 위함입니다.

## 118. Pascal's Triangle ( LeetCode )
![Pascal's Triangle](./pascal.gif)

제가 해결해본 첫 DP 문제입니다. 

해당 문제를 풀이하면서 DP(Dynamic Programming) 문제를 어디서 어떻게 접근해야 할 지 감을 익혔습니다.

    DP(Dynamic Programming)?
    한 문제에서 작은 문제들이 반복되는 패턴을 활용하여 문제를 해결하는 방식
    문제를 작은 문제로 나누고, 작은 문제를 해결할 때마다 값을 기록(memoizing) 하고 활용하여 문제를 해결합니다.

```Java
  public List<List<Integer>> generate(int numRows) {
    List<List<Integer>> result = new ArrayList<>();
    List<Integer> prev = null;
    List<Integer> curr = null;

    for (int i = 0; i < numRows; i++) {
      curr = new ArrayList<>();
      for (int j = 0; j <= i; j++)
        if (j == 0 || j == i)
          curr.add(1);
        else
          curr.add(prev.get(j - 1) + prev.get(j));
      prev = curr;
      result.add(curr);
    }

    return result;
  }
```

구현 코드는 간단하니 전체적인 설명은 생략하겠습니다.

문제를 작은 문제로 나눈 부분 ( 모든 순회에서 동일한 문제입니다. )
```Java
    if (j == 0 || j == i)
        curr.add(1);
    else
        curr.add(prev.get(j - 1) + prev.get(j));
```
해결한 문제를 저장하는 부분
```Java
    List<Integer> prev = null;
    List<Integer> curr = null;
    ...
    prev = curr;
```

DP를 쉽게 이해할 수 있는 좋은 문제인 것 같습니다 👍
