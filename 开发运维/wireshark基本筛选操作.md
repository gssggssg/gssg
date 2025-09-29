# 🐬 Wireshark 筛选条件速查表

## 协议过滤
| 协议 | 过滤条件 |
|------|----------|
| HTTP | `http` |
| TCP  | `tcp` |
| UDP  | `udp` |
| ICMP | `icmp` |
| DNS  | `dns` |

---

## IP 过滤
| 描述       | 过滤条件 |
|------------|----------|
| 任意 IP    | `ip.addr == 192.168.1.1` |
| 来源 IP    | `ip.src == 192.168.1.1` |
| 目标 IP    | `ip.dst == 192.168.1.1` |
| IP + TCP   | `ip.addr == 192.168.1.1 && tcp` |

---

## 端口过滤
| 描述        | 过滤条件 |
|-------------|----------|
| 任意端口    | `tcp.port == 80` |
| 来源端口    | `tcp.srcport == 80` |
| 目标端口    | `tcp.dstport == 80` |
| DNS (UDP)   | `udp.port == 53` |

---

## HTTP 过滤
| 描述        | 过滤条件 |
|-------------|----------|
| HTTP 请求   | `http.request` |
| HTTP 响应   | `http.response` |
| 指定 Host   | `http.host == "example.com"` |
| 请求方法    | `http.request.method == "GET"` |
| 包含关键字  | `http contains "login"` |

---

## TCP 过滤
| 描述                  | 过滤条件 |
|-----------------------|----------|
| 三次握手 (SYN)        | `tcp.flags.syn == 1 && tcp.flags.ack == 0` |
| ACK 包                | `tcp.flags.ack == 1` |
| 断开连接 (FIN)        | `tcp.flags.fin == 1` |
| 重传包                | `tcp.analysis.retransmission` |

---

## ICMP 过滤
| 描述         | 过滤条件 |
|--------------|----------|
| 所有 ICMP    | `icmp` |
| 请求包       | `icmp.type == 8` |
| 响应包       | `icmp.type == 0` |

---

## 通用
| 描述                   | 过滤条件 |
|------------------------|----------|
| 包含关键字             | `frame contains "keyword"` |
| 排除 ARP/ICMP          | `!(arp || icmp)` |
| 指定会话流             | `tcp.stream eq 1` |
