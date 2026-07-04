export default function CalculatorPage() {
  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <header className="bg-white border-b border-gray-200 h-14 flex items-center px-6 shrink-0">
        <a href="/" className="flex items-center gap-2 no-underline mr-auto">
          <div className="w-7 h-7 bg-blue-900 rounded-md flex items-center justify-center text-orange-500 font-black text-xs relative">
            <span className="absolute top-[6px] block w-[10px] h-[2px] bg-orange-500 rounded"></span>
            <span className="absolute top-[12px] block w-[14px] h-[2px] bg-white rounded"></span>
            <span className="absolute top-[18px] block w-[8px] h-[2px] bg-orange-500 rounded"></span>
          </div>
          <span className="font-black text-sm text-blue-900">CGT Lab</span>
        </a>
        <div className="text-xs text-gray-500">프로 플랜 활성화됨</div>
      </header>
      
      <main className="flex-1 w-full h-full">
        <iframe 
          src="/calculator.html" 
          className="w-full h-full border-none"
          title="양도소득세 계산기"
        />
      </main>
    </div>
  );
}
