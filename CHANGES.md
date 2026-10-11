# Port to @itsliaaa/baileys

- package.json: dct-dev-private-baileys -> @itsliaaa/baileys (+ mongodb, body-parser, mammoth declared). Node >= 20 (22 recommended: node-fetch@3 / file-type@21 are ESM).
- pair.js / msg.js / index.js: all requires point to @itsliaaa/baileys (also fixed typo `dct-dev-privet-baileys` in `.pair`).
- Button compatibility layer (top of pair.js): every socket.sendMessage() call converts the old
  buttons:[{buttonId,buttonText,type,nativeFlowInfo}] / [{name,buttonParamsJson}] into nativeFlow:[{text,id|url|copy|call|sections}].
- `.menu`: rewritten send (no crash when data/xion.docx is missing, image header fallback, text fallback),
  sub-menus are now real commands: .dl .cr .tools (+ .set alias of .setting) instead of a temporary listener.
- `.tourl`, `.pair`, `.owner`: raw relayMessage/generateWAMessageFromContent replaced by sendMessage.
- `.video` / `.tiktok` quality pickers: reply parser now understands interactiveResponseMessage.
- Owner checks: @lid senders are resolved to their phone-number JID (participantAlt / remoteJidAlt).
