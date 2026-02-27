"use client";

import { useEffect, useState } from "react";
import { Mic, PhoneOff, Loader2 } from "lucide-react";
import Vapi from "@vapi-ai/web";

export const VoiceAgent = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [vapi, setVapi] = useState<Vapi | null>(null);

    useEffect(() => {
        // Use environment variable for VAPI Public Key
        const publicKey = process.env.NEXT_PUBLIC_VAPI_PUBLIC_KEY;
        if (!publicKey) {
            console.error("VAPI Public Key is missing");
            return;
        }

        const vapiInstance = new Vapi(publicKey);
        setVapi(vapiInstance);
        setIsLoaded(true);

        vapiInstance.on("call-start", () => {
            setIsActive(true);
            setIsLoading(false);
        });

        vapiInstance.on("call-end", () => {
            setIsActive(false);
            setIsLoading(false);
        });

        vapiInstance.on("error", (e) => {
            console.error("Vapi Error:", e);
            setIsActive(false);
            setIsLoading(false);
        });

        return () => {
            vapiInstance.removeAllListeners();
            vapiInstance.stop();
        };
    }, []);

    const toggleAgent = async () => {
        if (!vapi) return;

        if (isActive) {
            setIsLoading(true);
            vapi.stop();
        } else {
            setIsLoading(true);
            const assistantId = process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID;
            if (!assistantId) {
                console.error("VAPI Assistant ID is missing");
                setIsLoading(false);
                return;
            }
            vapi.start(assistantId);
        }
    };

    if (!isLoaded) return null;

    return (
        <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3">
            {isActive && (
                <div className="px-3 py-1.5 bg-zinc-950 border border-cyan-400/30 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(0,255,255,0.1)]">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></div>
                    <span className="text-[9px] font-mono text-cyan-400 uppercase tracking-widest">
                        Audio Link Active
                    </span>
                </div>
            )}

            <button
                onClick={toggleAgent}
                disabled={isLoading}
                className={`relative group flex items-center justify-center w-14 h-14 rounded-full transition-all duration-500 overflow-hidden border ${isActive
                    ? "bg-cyan-900/20 border-cyan-400/50 shadow-[0_0_30px_rgba(0,255,255,0.2)]"
                    : "bg-zinc-950 border-zinc-800 hover:border-cyan-400/30 hover:bg-zinc-900"
                    }`}
            >
                {/* Background Radar Effect when active */}
                {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-full h-full border border-cyan-400/20 rounded-full animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                    </div>
                )}

                <div className="relative z-10 transition-colors duration-300">
                    {isLoading ? (
                        <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
                    ) : isActive ? (
                        <PhoneOff className="w-5 h-5 text-cyan-400" />
                    ) : (
                        <Mic className={`w-5 h-5 ${isActive ? 'text-cyan-400' : 'text-zinc-500 group-hover:text-cyan-400'
                            }`} />
                    )}
                </div>
            </button>
        </div>
    );
};
