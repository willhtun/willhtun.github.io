import React, { Component } from 'react';
import './index.css';

class About extends Component {
  render() {
    return (
      <div className="Card">
        <h1> > HELLO WORLD </h1>
        <p> My name is Will Htun and I am from Los Angeles, California. I am a 4th year
            undergraduate student currently pursuing a degree in Computer Science at University of 
            California, Los Angeles. </p>
        <p> I am a front-end web developer for a student startup at UCLA building an online shopping 
            experience tailored for college students. I also develop Android apps, web apps, and  
            Unity3D video games. </p>
        <p> I have always had an immense interest in art and technology. My passion is to create
            softwares and applications that allow me to combine my artistic creativity with my problem 
            solving skills. I am interested in developing softwares and applications that
            aim to bridge the gap even closer between humans and technology, while at the same time
            ensuring ease of use, intuition, privacy and safety. </p>
        <p> In my free time, I like to watch movies, take photographs, bake, draw digital art and play videogames. </p>
        <p> I am currently seeking an entry level software engineer position.</p>

        <div className="ExternalLogo-Wrapper">
                <div className="ExternalLogo">
                <a href="https://github.com/willhtun">
                    <img src="https://camo.githubusercontent.com/7710b43d0476b6f6d4b4b2865e35c108f69991f3/68747470733a2f2f7777772e69636f6e66696e6465722e636f6d2f646174612f69636f6e732f6f637469636f6e732f313032342f6d61726b2d6769746875622d3235362e706e67" alt="Github"/>
                </a>
                </div>
                <div className="ExternalLogo">
                <a href="https://www.linkedin.com/in/willhtun-4297/">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/600px-LinkedIn_logo_initials.png" alt="LinkedIn"/>
                </a>
                </div>
                <div className="ExternalLogo">
                <a href="mailto:willhtun42@gmail.com">
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8AAAD+/v6FhYW8vLyGhoa5ubmBgYF/f3+4uLjAwMAEBATi4uJ8fHzy8vLv7+82NjZKSkqoqKjR0dESEhJSUlKNjY10dHSdnZ3Z2dno6OhXV1eXl5c8PDyampqvr68cHBxDQ0NhYWEkJCSfQK9pAAALVElEQVR4nN2deWOiPBDGY2pbD0Srdm1t93r3+3/Hl4AHJPPkDgk+f3S3FiE/ckxmMgTGruKcNz+r/el9d5xNU8fd+2lftSyMVvVjl7uQEbT7cQZ850XuskXThmT8lbtYUfXRNNUhX/2Vu0yR9VVfhpfLj2o3W+cuU2Ttqnv9cVblLk4S9RDrRxhCVe3uDfU9d1kS6b3rhvzBRtG+fnW2/5y7HAl1bqtwk7sYCbVop2q5S5FUYjz9kbsQSfWjIVQsxdNhC2aupWt7eJZhdmojfavMZypY1ZvEU7G9BMixc1WalIKKD7iEuGcnGZnLk/I88iyEMgM9SfOZpzLwmD8hZ08DondpoDk8AOFBGmqGMZmt05m5b5dNehu3A6IjG7baOuWlR1I9RJIIP8coQuKO8Kkl/PYfw+w+M3+b+Jb6ETw1V1wlifDo20yLIWT1UUvYmA8/lULIZAOvEM5ek/eTXjmDrzQ8gxjbX2UghbBBLMUkOosCJAiF1zhZRiJsTxDOnqcz+e5VBlcmbJiwmZ1ORz1CEpAmFMPNVFoqv//b9EEicE8Tzjbmhqr5O5evHVZ4y2NBRI0kXNs01KIIuxq0JxR6mkw77awi2Qe1hAU5wyZpASHh+hJNnYg0y9e4DsedwPmLa/qgibBYRC79ogPUEzazmyIl3XbcB82EYrhJV4tRzgxmMtaEwtMosqFeRHoTLoTrbgIXt0yXO8blz24/nUJ4JkBjHbZ9sdCGKm6EvBSjTkwlwhcCMWlfDBHwJuZaQib9uVXshhpLNOCKDStSJiQRN+EN1e77LnNt4E3MmYwkE7IV8bWxpuFuhHQNmgibL9J9cRQ53cYnYlyZCwBTHXKyoWYdbpQrC3uiLGiv2ybKzK2U0bWY09MgCElvYt4daa5Dui9mHFGJ1kMZ+tWlnRnrUIiqxVImcMjhXV0PsCDkdF98LsOXAoDzW+msCDlbkrVYgEDY8IW5ELbnofriIntDJRdf1r0myqwJiYaawNNwFvDoV/1bb00I7GJGtRBokHElbL+yJNp7TtOPRtGX4WEOhDkncKSAuySN8Q6EbV9UanERY/HWQ+Ki9ExGmhNYE7aiPY1chEoNSqNoJxdCyi5aLdukECe9iRf1drvVIT0ND4ijemaKoRXeOXGsGyFwpkY3/dCj5+rE3JWQnt2MbfrpuGhn6AMJhYDRCKlFp+8iO0g1UeZDiPpiSEN1JVQ8+plqB69yJuQgdhPUUB1vDmUHiVG0kzvhxdMgTb8zmrOQoVft4FXOhO1l8k3DYdgQ3l0fQuRpjLG+SBv6lWYU8KpDoRyehqU3MZQnIYjdLNJ2RX3YEMibECGm1YJsoikIGYrdpFvTIOeipDcxlD8hoyNwyYKMYBR9MV3PjpByAZDpT1OL4pTUXBQa+psC6hDZRYtMRmeJ2wm9Cb3CCGnEBLnhNmFDoFBC5BJHZaSSEISMfVAoiJCl8TTUi9h79KqCCQnEdWTTDxKBzINMKwtC7WnEH4Hpj1SNF2/C1dDfFErYCngakQjpPmjXRFkUwsTpDNZhQyALQptC0OuLMZ5kUgeZ9czgTQwVhRAHGT2ghiemDb3G4VUUpw7B+mKMhvpEpN/ZGPqb4tSh0Atwid3rsf9ohr8dvMqREJYXrPV7ef09Qu+ZzF2x6jBmOsOdkE5CcLtpsQjZZQKnFMh3REWPFZgcXkUxCaMGGamg09rKXZIUlzBqkBEsYWckZNj0u954Mk9m5mTob4pMGMklBolA7k2Uxa9DuqG6jqh0DXo0URabsBWVseHiEousDyoh1nkU7RSdEJp++zMQhr4BXHrOcuMTgsCGJSJH6ZQveLjSzwwtCJ2nlkFBRrg24avodchgOoPVg7bu64MmJSL0jIZrkhCKImSaNQ19QaE3EaBUhHSCmNkuOiUhWClZHcJpuGZEjN4HhRIRMk06Ayiv7/qgSQkJ6dgNXF/EiUBh8ax0hEIosEGvRlJNdBlcBhdCD9NPp/lRhHD5zJ+tU9I6dHqIIRFgBEJcBk4+NjdT7SJaH/QLRkpKS0hnhitBRrTlUfgww5IT0oBq7IZafBEquh+Ku0+NpZ3umYwo27DTMngdMikhNf2+6mYXQR+8KmTSbUEYlvdLzWkuGoyo9K5cVwVNu42E3rePa/rgVV+H9tCD6X0oTitNcjkSEmr6YKem2n6enk8/DYfNnJdi3Aj9z6zrg67yb6ghhJz43/UDEBi2ldopQ+yiNyHFev+E6oP/WQJSxwW4UJ6EGjOPQvsbY8/stCSzZwqKtWmSMq2a7io4vSQ9ocYrNCPOYbytkJg3B33wmdkNQHNN1Hvu52nEJUQQ1/kLvRB+19Xy0Sv4Raw9GdYPmxJ+4tcpHj97x4FsxPiELg0D5WPcF2XEuWr5vSFXvdXGTBofT8NE6CA0ig59waaA+3/EUf/2sg0CuTQ51/GtFmRECetvpY9911JzwcNNLkIU5VbCTm0J69Xiz+2QP4uVuoG/OAwtdWfLibJ/8FIUkX+ufn98f/xefeICU4jLTDlRcCZDl2bwgh60NSIVqVs7B4njECI7GJ5+iXITS8gvjQIYITMqUh2mejyIa7YWsFQEQs2idhRRnoaD6Y9DmPbB5zDTH4Mw7caDYES1jt3YEOpKisKGcR+XBU//xnoqyECY/nlgkEQU77knPaGTofcUXh+2uIwNoebKaMPB+Hr2jd0EEqLnuWMrIBHFn7A9d6J9hsmrgX2C0z3pnHKqRl7PNSnzohDCMQaZ3vU8g4yehDx1H6QybuAuiaEZtGQBKMAR3mTiEWT0JDSFDdMIBBmD9jYh3O/2o+B0dT/BvqipRp86HNPQK9d2Tu/zI0T5aomw+teGETj0DUfCyxs10nsTOtF7fSFPw7kOk+zX5iR6uIF20YMQ7e6dehjt/dfl4VlHwrGnakgO64tuhCjbsJS9L6lqdCYca1chnTjl9aPYjYGQyycuoYl2AttiKffajbCoDa8tPQ0DoVDvrVPl7AVNehpryuu3IGSFGHpVIOA/ZLQjZJqYTIYKvJXolc6BGxxmS6hJBBqXq18m6Gn0ZUeIHN78b0QEGyz1brstYRGGXhEIMg76og0hSuUq4LWdwJla9ZbRLQjNiUB5BeyiE2E2j95CRk/DTIinarmb6E1om5e2gCZCZOjDBpnY9wasaVgSptioLC4hp7c8W1rVIYeb6oQVMjKi7il+PWEydyl+F6YzNrjp/YfJ5qKxCaHpN7bS0dYHIwhsGKIhXM/GWuGNIlSL2jrU5slEeEQ3qlBuuJZwQjXYSfeopiVhdm/CoOD3cpfyak4g0FAdCMtuop3QU+FWhIV4Ewbp+6KWsPAm2gm4xEbC9az8QeauhaadaupwlBXeGAKZjEbCkhxevVDejYFQHUXL5oWbGCBCwpsomVBTi4BwozlZkeMryGSEhAGjaL5FDWD6ScKQUTTnsg3ZUClCi90O70cU02bRU6gEYc71wVARdlElnM5MRhHpaSiEBSy+eIs0/TLhKXcpg3XSEx7ryVZgJ87qo5bw+zY26h+bKVnfWsLPuxXIWsoQfWoJa4UQPJI8TmG9VEuEw1a7LbrsdtoORxa2G/x+yF28CDoMiHZsuHdasvdRjqhhYOpL9jmqvnc0KRexE2fVEGjD9sMP3jjTEE5AXNoqZi8jz96q3GUMUiXvhdPg/JU+mj0dtrnL6antQZmV/m0+/pA/fCh9NITn3IVIqrOoWxxqnL5ETJSzs27lZuI6t4QP3BP3V4Nn2hN2qnq/mnRe78xHT1C7225bykznQTSYu1SPV4u7ajjrrN9zlyiyvuqh8/5wI+rHZQeBgc7G1JTJ6PVMTVsb3vOHxV7bxevnx1lx/Hq/VvvN1w5vOFq2jruvzb6SmP4HScBv66zPXlsAAAAASUVORK5CYII=" alt="LinkedIn"/>
                </a>
                </div>
        </div>

      </div>
    );
  }
}

export default About;
