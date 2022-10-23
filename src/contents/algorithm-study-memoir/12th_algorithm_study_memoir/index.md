---
title: 12th Algorithm Study Memoirs
date: "2022-10-01T22:48:03.284Z"
description: "12번째 알고리즘 스터디 회고록입니다."
tag:
  - Algorithm
preview: ../src/images/no-banner.jpg
slug: 12th-algorithm-study-memoir
---

시간이 빨리 가는 한 주 였습니다.

이번 주 부터 휴가 기간인데 들 뜬 마음으로 한 주를 보내게 되어서 기분이 다채롭네요

작성 시점부터 출영 후 복귀하여 딩굴대다가 일어나서 친구랑 치킨 한마리하면서 작성 중입니다.

# 다항식 구하기
```Java
class Polynomial {
  int num;
  int index;
  Polynomial(int num, int index) { this.num = num; this.index = index; }
}


public class Main {

  public static void main(String[] args) throws IOException {
    var map = new HashMap<Integer, Integer>();
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st;

    int polynomialCount = parseInt(br.readLine());

    for (int i = 0; i < polynomialCount; i++) {
      st = new StringTokenizer(br.readLine());
      st.nextToken();
      int cnt = parseInt(st.nextToken());
      for (int j = 0; j < cnt; j++) {
        st = new StringTokenizer(br.readLine(), " ");
        int num = parseInt(st.nextToken());
        int index = parseInt(st.nextToken());
        if (index > 100000) {
          System.out.println("Error");
          return;
        }
        int indexNum = map.getOrDefault(index, 0);
        map.put(index, num + indexNum);
      }
    }

    var storage = new ArrayList<Polynomial>();
    for (var entry : map.entrySet())
      storage.add(new Polynomial(entry.getValue(), entry.getKey()));
    List<Polynomial> result = storage.stream()
            .filter(polynomial -> polynomial.index != 0)
            .sorted((o1, o2) -> Integer.compare(o2.index, o1.index))
            .collect(Collectors.toList());
    System.out.println(result.size());
    result.forEach(polynomial -> {
      System.out.println(polynomial.num + " " + polynomial.index);
    });
  }
}
```

여러 다항식을 입력받고, 모든 항을 계산하고 남은 항의 결과 값을 계수과 지수로 출력하는 문제입니다.

Map 형식에 지수, 계수 값을 기록하고 중복되는 값끼리 +, - 연산을 수행합니다.
```Java
    var map = new HashMap<Integer, Integer>();
    ...
    int indexNum = map.getOrDefault(index, 0);
```

이 후에 다항식을 클래스로 구현해두고 다항식 정보를 저장합니다.
```Java
class Polynomial {
  int num;
  int index;
  Polynomial(int num, int index) { this.num = num; this.index = index; }
}
...
    for (var entry : map.entrySet())
      storage.add(new Polynomial(entry.getValue(), entry.getKey()));

```

이후 배열 형태로 저장한 다항식 클래스들 Stream API 를 지수 순으로 정렬합니다.
```Java
    List<Polynomial> result = storage.stream()
            .filter(polynomial -> polynomial.index != 0)
            .sorted((o1, o2) -> Integer.compare(o2.index, o1.index))
            .collect(Collectors.toList());
```

이 후 데이터를 출력하여 문제를 마무리 하였습니다! 

저는 그럼 즐거운 휴가를 보내도록 하겠습니다~ 감사합니다 