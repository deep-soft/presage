(function() {var implementors = {
"libsignal_protocol":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.PublicKey.html\" title=\"struct libsignal_protocol::PublicKey\">PublicKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.PrivateKey.html\" title=\"struct libsignal_protocol::PrivateKey\">PrivateKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"libsignal_protocol/struct.PrivateKey.html\" title=\"struct libsignal_protocol::PrivateKey\">PrivateKey</a>&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.KeyPair.html\" title=\"struct libsignal_protocol::KeyPair\">KeyPair</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.IdentityKey.html\" title=\"struct libsignal_protocol::IdentityKey\">IdentityKey</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.IdentityKeyPair.html\" title=\"struct libsignal_protocol::IdentityKeyPair\">IdentityKeyPair</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"libsignal_protocol/struct.PrivateKey.html\" title=\"struct libsignal_protocol::PrivateKey\">PrivateKey</a>&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.IdentityKeyPair.html\" title=\"struct libsignal_protocol::IdentityKeyPair\">IdentityKeyPair</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>&gt; for <a class=\"enum\" href=\"libsignal_protocol/enum.CiphertextMessageType.html\" title=\"enum libsignal_protocol::CiphertextMessageType\">CiphertextMessageType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.SignalMessage.html\" title=\"struct libsignal_protocol::SignalMessage\">SignalMessage</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.PreKeySignalMessage.html\" title=\"struct libsignal_protocol::PreKeySignalMessage\">PreKeySignalMessage</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.SenderKeyMessage.html\" title=\"struct libsignal_protocol::SenderKeyMessage\">SenderKeyMessage</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.SenderKeyDistributionMessage.html\" title=\"struct libsignal_protocol::SenderKeyDistributionMessage\">SenderKeyDistributionMessage</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.PlaintextContent.html\" title=\"struct libsignal_protocol::PlaintextContent\">PlaintextContent</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.67.0/std/primitive.u8.html\">u8</a>]&gt; for <a class=\"struct\" href=\"libsignal_protocol/struct.DecryptionErrorMessage.html\" title=\"struct libsignal_protocol::DecryptionErrorMessage\">DecryptionErrorMessage</a>"]],
"libsignal_service":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"libsignal_service/envelope/struct.EnvelopeEntity.html\" title=\"struct libsignal_service::envelope::EnvelopeEntity\">EnvelopeEntity</a>&gt; for <a class=\"struct\" href=\"libsignal_service/proto/struct.Envelope.html\" title=\"struct libsignal_service::proto::Envelope\">Envelope</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"libsignal_service/prelude/protocol/struct.PreKeyRecord.html\" title=\"struct libsignal_service::prelude::protocol::PreKeyRecord\">PreKeyRecord</a>&gt; for <a class=\"struct\" href=\"libsignal_service/pre_keys/struct.PreKeyEntity.html\" title=\"struct libsignal_service::pre_keys::PreKeyEntity\">PreKeyEntity</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;<a class=\"struct\" href=\"libsignal_service/prelude/protocol/struct.SignedPreKeyRecord.html\" title=\"struct libsignal_service::prelude::protocol::SignedPreKeyRecord\">SignedPreKeyRecord</a>&gt; for <a class=\"struct\" href=\"libsignal_service/pre_keys/struct.SignedPreKey.html\" title=\"struct libsignal_service::pre_keys::SignedPreKey\">SignedPreKey</a>"]],
"presage":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.67.0/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;<a class=\"struct\" href=\"presage/prelude/struct.Content.html\" title=\"struct presage::prelude::Content\">Content</a>&gt; for <a class=\"enum\" href=\"presage/enum.Thread.html\" title=\"enum presage::Thread\">Thread</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()