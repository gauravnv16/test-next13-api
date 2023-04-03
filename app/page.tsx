
"use client"

export default function Home() {
  const Handler = (e:any) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value
    }

    fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json()).catch(err => console.log(err))

  }
  return (
    <>
    <form onSubmit={
      Handler
    }>
      Name:
      <input type="text" name="name" id="name"/>
      <br></br><br></br>
      Email:
      <input type="text" name="email" id="email"/>
      <br></br>
      <br></br>
      Password:
      <input type="text" name="password" id="password"/>
      <br></br>
      <br></br>
      <input type="submit" value="Submit"/>
    </form>
    </>
  )
}
