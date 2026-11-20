# Run evidence

- Tool: Codex extension for VS Code, ChatGPT sign-in
- Command: `npx.cmd playwright test tests/guest-garage.spec.ts --project=chromium`
- Timestamp: `2026-11-20T16:30:09Z` (время фиксации evidence; время запуска не было выведено Playwright)
- Environment: Windows, Playwright Chromium, `https://qauto.forstudy.space` (без credentials)
- Actual: первый запуск в sandbox завершился `net::ERR_NETWORK_ACCESS_DENIED` при переходе на сайт; повторный запуск вне sandbox: `1 passed` в Chromium.

| Елемент | Джерело |
|---|---|
| setup | `Guest log in` → Garage; accessibility snapshot текущего UI |
| locator/action | Accessibility snapshot формы `Add a car`: `Brand` (опция `Audi`), `Model` (опция `TT`), `Mileage`, кнопка `Add` |
| assertions | URL содержит `/panel/garage`; текст `Audi TT` видим |

- FACTS: повторный запуск указанной команды завершился `1 passed`; первый запуск в sandbox был ограничен сетью.
- ASSUMPTIONS: нет.
- RISKS: успешный запуск выполнен вне sandbox из-за сетевого ограничения sandbox.
- HUMAN CORRECTION: не предоставлена.
- DECISION: ожидает решения человека — запуск прошёл успешно.
