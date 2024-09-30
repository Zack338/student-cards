export default function Card() {
  return `<section>
      <div
        class="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div class="rounded bg-white p-4 shadow">
          <h2 class="text-xl font-semibold">Amanda Ellis</h2>
          <ul class="ml-4 list-disc space-y-1">
            <li>This is the third college I've attended</li>
            <li>I am a wife and mom</li>
            <li>I have been a dental assistant for 16 years</li>
            <li>I love dogs, books, and hiking</li>
            <li>
              I not so secretly love late 90s and early 2000s pop-punk and emo
              music
            </li>
          </ul>
        </div>
      </div>
    </section>`;
}
