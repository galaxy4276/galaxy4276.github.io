---
title: 11th Algorithm Study Memoirs
date: "2022-09-24T10:12:03.284Z"
description: "11번째 알고리즘 스터디 회고록입니다."
tag:
  - Algorithm
preview: ../src/images/no-banner.jpg
slug: 11th-algorithm-study-memoir
---

11번 째 알고리즘 스터디 회고록입니다.

주변 일은 점점 바빠지는데, 날은 쌀쌀해지니 게을러지지 않게 주의해야할 것 같습니다.

새 프로젝트를 담당하게 되었고, 기존에 진행하고 있던 프로젝트가 잘 풀리지 않아 문제 풀이에 집중하지 못했네요.

# 1032. 명령 프롬프트 ( boj )
[명령 프롬프트](https://www.acmicpc.net/problem/1032)
```Java
public class Main {

  public static void main(String[] args) throws IOException {

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int caseCount = parseInt(br.readLine());
    char[] result = br.readLine().toCharArray();

    for (int i = 1; i < caseCount; i++) {
      char[] files = br.readLine().toCharArray();
      for (int j = 0; j < files.length; j++)
        if (files[j] != result[j])
          result[j] = '?';
        else
          result[j] = files[j];
    }

    System.out.println(result);
  }

}
```
간단하게 합집합이 되는 부분만을 평문그대로 두고, 공집합 문자열을 ?로 치환하는 문제입니다.

# 2161. 카드1 
[카드1](https://www.acmicpc.net/problem/2161)
```Java

public class Main {
  public static void main(String[] args) throws IOException {

    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");
    int N = parseInt(st.nextToken());
    Deque<Integer> q = new LinkedList<>();

    for (int i = 1; i <= N; i++)
      q.add(i);

    while (!q.isEmpty()) {
      System.out.print(q.poll() + " ");
      if (!q.isEmpty())
        q.addLast(q.poll());
    }
  }

```

문제를 보자마자 Deque 자료구조가 생각나서 바로 자료구조 꺼내들어서 해결해버린 문제입니다.

References 항목에 해당 자료구조를 학습하기 좋았던 블로그 주소 첨부하였습니다.

# References
[[실전 알고리즘] 0x07강 - 덱](https://blog.encrypted.gg/935)
