---
title: 14th Algorithm Study Memoirs
date: "2022-10-16T10:00:03.284Z"
description: "14번째 알고리즘 스터디 회고록입니다."
tag:
  - Algorithm
preview: ../src/images/no-banner.jpg
slug: 14th_algorithm_study_memoir
---

즐겁지만 추웠던 긴 휴가를 보내고나서 작성하는 알고리즘 스터디 회고록입니다.
13주차 회고록을 작성하지 못했는데, 대안으로 휴가 기간동안 개발한 알고리즘 스터디 헬프 서비스 개발 후기록을 남기려 했는데,

게을러 텨져서 작성이 연기되었습니다..

이번 문제는 Rust 언어를 다시 써서 진행해보려고 했는데 리트코드에서 진행하다가 백준으로 넘어오고 나서

stdin stdout 사용을 필요로 하게 되었는데, Rust 측에서 stdin, stdout 입력 및 처리에 관련해서

난이도가 좀 있어서 잠시 미루게 되었습니다.. 이 쯤되면 안미루는게 있는 지 모르겠네요 미래에 다시 이 글을
보고 미룬일정이 없음에 안도하길.

# 2061. 좋은 암호 ( boj )
[\[백준\] 좋은 암호](https://www.acmicpc.net/problem/2061)
```Java
public class Main {

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    StringTokenizer st = new StringTokenizer(br.readLine(), " ");

    BigInteger K = new BigInteger(st.nextToken());
    BigInteger L = new BigInteger(st.nextToken());

    int N = 0;

    for (int i = 2; i < L.intValue(); i++) {
      if (K.remainder(BigInteger.valueOf(i)).compareTo(BigInteger.ZERO) == 0) {
        N = i;
        break;
      }
    }
    String S = (N > 0) ? ("BAD " + N) : "GOOD";
    System.out.println(S);
  }
}

```
솔직히 말해서 지역 이동 간에 급하게 한 문제 풀어봐야겠다 싶어서 선택한 문제입니다.

JAVA 언어에서 BigInteger 를 처음사용해보았는데 알고리즘 풀이 또는 연산에 도움이 되는
메서드들이 생각보다 많이 제공되어서 인상깊었습니다.

# 1268. 핸드폰 요금 ( boj )
[\[백준\] 핸드폰 요금](https://www.acmicpc.net/problem/1267)
```Java
public class Main {
  public static int getPrice(int time, int per, int price) {
    int div = time / per;
    int rest = time % per;
    return div * price + (rest >= 0 ? price : 0);
  }

  public static int getPriceByCallTimes(int[] total, int per, int price) {
    int result = 0;
    for (int j : total) result += getPrice(j, per, price);
    return result;
  }

  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    br.readLine();
    String[] s = br.readLine().split(" ");
    int[] total = Arrays.stream(s).mapToInt(Integer::parseInt).toArray();
    int Y = getPriceByCallTimes(total, 30, 10);
    int M = getPriceByCallTimes(total, 60, 15);
    if (Y == M)
      System.out.println("Y M " + Y);
    else if (Y > M)
      System.out.println("M " + M);
    else
      System.out.println("Y " + Y);
  }
}
```
메서드를 나누어서 깔끔하게 풀어보고 싶어서 배열의 데이터를 한번에 처리하는 메서드, 배열의 요소를 처리하는 메서드
를 따로 두어서 해결하였습니다.

문제는 여기까지 풀었다만, 지속적으로 작성되는 회고록 내용에서 뭔가 매 스프린트마다 인상적인 문제를 풀었다 싶었던게 꽤

예전인 듯하여서 해당 문제를 좀 더 효율적으로 풀 수 있는 지라도 분석해보았습니다.

```Java
public class Main {

    public static StringBuilder sb = new StringBuilder();
    public static void main(String[] args) throws IOException{
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int n = Integer.parseInt(br.readLine());
        StringTokenizer st = new StringTokenizer(br.readLine());
        int sec;
        int sumY, sumM;
        sumY = sumM = 0;
        for (int i = 0; i < n; i++) {
            sec = Integer.parseInt(st.nextToken());
            sumY += (sec/30 + 1) * 10;
            sumM += (sec/60 + 1) * 15;
        }
        
        if(sumY <= sumM)
            System.out.print("Y ");
        if(sumY >= sumM)
            System.out.print("M ");
        
        System.out.print(Math.min(sumY, sumM));
    }
}
```
기존 코드 대비 인상적인 부분을 짚어보겠습니다.

```Java
    for (int i = 0; i < n; i++) {
        sec = Integer.parseInt(st.nextToken());
        sumY += (sec/30 + 1) * 10;
        sumM += (sec/60 + 1) * 15;
    }
```
N 값을 활용하며, + 1 함으로써 문제에서 제시하는 조건을 만족시킬 수 있습니다.
> 30초마다 10원씩 청구될 때, 1 ~ 29 초까지는 10원이 청구되며, 30 ~ 59초 사이는 20원이 청구된다.

```Java
    if (Y == M)
      System.out.println("Y M " + Y);
    else if (Y > M)
      System.out.println("M " + M);
    else
      System.out.println("Y " + Y);
```
기존 코드에서 다음과 같이 처리하기 보다는
```Java
        if(sumY <= sumM)
            System.out.print("Y ");
        if(sumY >= sumM)
            System.out.print("M ");
        
        System.out.print(Math.min(sumY, sumM));
```
다음과 같이 처리하여 if 연산 횟수를 줄이고 가독성을 향상시킬 수 있습니다.

# 마치며
최근에 프로그래밍 언어에 대한 풀을 넓히고자 Rust와 Kotlin 을 눈여겨보고 있는데,
무언가를 더 배워야겠다는 인지만을 하고 실천하지 않고 있어 오히려 더 게을러지는 느낌을 받습니다.
해당 회고록 작성 시점부터 다음 회고록부터는 새로운 언어 시도 차 Rust 든, Kotlin 이든 다른 언어를 활용해서
문제를 해결해봐야겠네요.
