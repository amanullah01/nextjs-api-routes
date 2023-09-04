export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <form>
        <div>
          <label htmlFor="email">Your email</label>
          <input type="email" id="email" />
        </div>

        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea id="feedback" rows="5"></textarea>
        </div>
        <button>Send Feedback</button>
      </form>
    </div>
  );
}
