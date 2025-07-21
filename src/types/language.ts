export interface Translations {
  // Header
  title: string;
  subtitle: string;
  
  // Test phases
  readyToTest: string;
  testingLatency: string;
  testingDownload: string;
  testingUpload: string;
  testComplete: string;
  
  // Button labels
  start: string;
  stop: string;
  speedTest: string;
  testing: string;
  
  // Results
  speedResults: string;
  downloadSpeed: string;
  uploadSpeed: string;
  ping: string;
  mbpsDownload: string;
  mbpsUpload: string;
  msPing: string;
  
  // Server selection
  serverSelection: string;
  server: string;
  location: string;
  excellent: string;
  good: string;
  fair: string;
  
  // Test history
  testHistory: string;
  noTestHistory: string;
  noTestHistoryDesc: string;
  
  // Connection info
  ipAddress: string;
  isp: string;
  
  // Status
  realTimeAnalysis: string;
  secureConnection: string;
  
  // Languages
  languages: {
    en: string;
    id: string;
    es: string;
    fr: string;
    de: string;
    ja: string;
    ko: string;
    zh: string;
  };
}

export const translations: Record<string, Translations> = {
  en: {
    title: "SPEED TEST",
    subtitle: "Test your internet connection speed with precision",
    readyToTest: "Ready to Test Your Connection",
    testingLatency: "Testing Latency",
    testingDownload: "Testing Download Speed",
    testingUpload: "Testing Upload Speed",
    testComplete: "Test Complete",
    start: "START",
    stop: "STOP",
    speedTest: "Speed Test",
    testing: "Testing...",
    speedResults: "Speed Results",
    downloadSpeed: "Download Speed",
    uploadSpeed: "Upload Speed",
    ping: "Ping",
    mbpsDownload: "Mbps Download",
    mbpsUpload: "Mbps Upload",
    msPing: "ms Ping",
    serverSelection: "Server Selection",
    server: "Server",
    location: "Location",
    excellent: "Excellent",
    good: "Good",
    fair: "Fair",
    testHistory: "Test History",
    noTestHistory: "No Test History",
    noTestHistoryDesc: "Start your first speed test to see results here",
    ipAddress: "IP Address",
    isp: "ISP",
    realTimeAnalysis: "Real-time Analysis",
    secureConnection: "Secure Connection",
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ja: "日本語",
      ko: "한국어",
      zh: "中文"
    }
  },
  id: {
    title: "TES KECEPATAN",
    subtitle: "Uji kecepatan koneksi internet Anda dengan presisi",
    readyToTest: "Siap Menguji Koneksi Anda",
    testingLatency: "Menguji Latensi",
    testingDownload: "Menguji Kecepatan Unduh",
    testingUpload: "Menguji Kecepatan Unggah",
    testComplete: "Tes Selesai",
    start: "MULAI",
    stop: "BERHENTI",
    speedTest: "Tes Kecepatan",
    testing: "Menguji...",
    speedResults: "Hasil Kecepatan",
    downloadSpeed: "Kecepatan Unduh",
    uploadSpeed: "Kecepatan Unggah",
    ping: "Ping",
    mbpsDownload: "Mbps Unduh",
    mbpsUpload: "Mbps Unggah",
    msPing: "ms Ping",
    serverSelection: "Pilihan Server",
    server: "Server",
    location: "Lokasi",
    excellent: "Sangat Baik",
    good: "Baik",
    fair: "Cukup",
    testHistory: "Riwayat Tes",
    noTestHistory: "Tidak Ada Riwayat Tes",
    noTestHistoryDesc: "Mulai tes kecepatan pertama Anda untuk melihat hasil di sini",
    ipAddress: "Alamat IP",
    isp: "Penyedia Internet",
    realTimeAnalysis: "Analisis Real-time",
    secureConnection: "Koneksi Aman",
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ja: "日本語",
      ko: "한국어",
      zh: "中文"
    }
  },
  es: {
    title: "PRUEBA DE VELOCIDAD",
    subtitle: "Prueba la velocidad de tu conexión a internet con precisión",
    readyToTest: "Listo para Probar tu Conexión",
    testingLatency: "Probando Latencia",
    testingDownload: "Probando Velocidad de Descarga",
    testingUpload: "Probando Velocidad de Subida",
    testComplete: "Prueba Completa",
    start: "INICIAR",
    stop: "DETENER",
    speedTest: "Prueba de Velocidad",
    testing: "Probando...",
    speedResults: "Resultados de Velocidad",
    downloadSpeed: "Velocidad de Descarga",
    uploadSpeed: "Velocidad de Subida",
    ping: "Ping",
    mbpsDownload: "Mbps Descarga",
    mbpsUpload: "Mbps Subida",
    msPing: "ms Ping",
    serverSelection: "Selección de Servidor",
    server: "Servidor",
    location: "Ubicación",
    excellent: "Excelente",
    good: "Bueno",
    fair: "Regular",
    testHistory: "Historial de Pruebas",
    noTestHistory: "Sin Historial de Pruebas",
    noTestHistoryDesc: "Inicia tu primera prueba de velocidad para ver resultados aquí",
    ipAddress: "Dirección IP",
    isp: "Proveedor de Internet",
    realTimeAnalysis: "Análisis en Tiempo Real",
    secureConnection: "Conexión Segura",
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ja: "日本語",
      ko: "한국어",
      zh: "中文"
    }
  },
  fr: {
    title: "TEST DE DÉBIT",
    subtitle: "Testez la vitesse de votre connexion internet avec précision",
    readyToTest: "Prêt à Tester votre Connexion",
    testingLatency: "Test de Latence",
    testingDownload: "Test de Vitesse de Téléchargement",
    testingUpload: "Test de Vitesse d'Upload",
    testComplete: "Test Terminé",
    start: "DÉMARRER",
    stop: "ARRÊTER",
    speedTest: "Test de Débit",
    testing: "Test en cours...",
    speedResults: "Résultats de Vitesse",
    downloadSpeed: "Vitesse de Téléchargement",
    uploadSpeed: "Vitesse d'Upload",
    ping: "Ping",
    mbpsDownload: "Mbps Téléchargement",
    mbpsUpload: "Mbps Upload",
    msPing: "ms Ping",
    serverSelection: "Sélection de Serveur",
    server: "Serveur",
    location: "Emplacement",
    excellent: "Excellent",
    good: "Bon",
    fair: "Correct",
    testHistory: "Historique des Tests",
    noTestHistory: "Aucun Historique de Test",
    noTestHistoryDesc: "Commencez votre premier test de vitesse pour voir les résultats ici",
    ipAddress: "Adresse IP",
    isp: "Fournisseur Internet",
    realTimeAnalysis: "Analyse en Temps Réel",
    secureConnection: "Connexion Sécurisée",
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ja: "日本語",
      ko: "한국어",
      zh: "中文"
    }
  },
  de: {
    title: "GESCHWINDIGKEITSTEST",
    subtitle: "Testen Sie Ihre Internetverbindungsgeschwindigkeit mit Präzision",
    readyToTest: "Bereit, Ihre Verbindung zu Testen",
    testingLatency: "Latenz wird getestet",
    testingDownload: "Download-Geschwindigkeit wird getestet",
    testingUpload: "Upload-Geschwindigkeit wird getestet",
    testComplete: "Test Abgeschlossen",
    start: "STARTEN",
    stop: "STOPPEN",
    speedTest: "Geschwindigkeitstest",
    testing: "Teste...",
    speedResults: "Geschwindigkeitsergebnisse",
    downloadSpeed: "Download-Geschwindigkeit",
    uploadSpeed: "Upload-Geschwindigkeit",
    ping: "Ping",
    mbpsDownload: "Mbps Download",
    mbpsUpload: "Mbps Upload",
    msPing: "ms Ping",
    serverSelection: "Server-Auswahl",
    server: "Server",
    location: "Standort",
    excellent: "Ausgezeichnet",
    good: "Gut",
    fair: "Ausreichend",
    testHistory: "Test-Verlauf",
    noTestHistory: "Kein Test-Verlauf",
    noTestHistoryDesc: "Starten Sie Ihren ersten Geschwindigkeitstest, um Ergebnisse hier zu sehen",
    ipAddress: "IP-Adresse",
    isp: "Internetanbieter",
    realTimeAnalysis: "Echtzeit-Analyse",
    secureConnection: "Sichere Verbindung",
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ja: "日本語",
      ko: "한국어",
      zh: "中文"
    }
  },
  ja: {
    title: "スピードテスト",
    subtitle: "インターネット接続速度を精密にテストします",
    readyToTest: "接続テストの準備完了",
    testingLatency: "レイテンシをテスト中",
    testingDownload: "ダウンロード速度をテスト中",
    testingUpload: "アップロード速度をテスト中",
    testComplete: "テスト完了",
    start: "開始",
    stop: "停止",
    speedTest: "スピードテスト",
    testing: "テスト中...",
    speedResults: "速度結果",
    downloadSpeed: "ダウンロード速度",
    uploadSpeed: "アップロード速度",
    ping: "Ping",
    mbpsDownload: "Mbps ダウンロード",
    mbpsUpload: "Mbps アップロード",
    msPing: "ms Ping",
    serverSelection: "サーバー選択",
    server: "サーバー",
    location: "場所",
    excellent: "優秀",
    good: "良好",
    fair: "普通",
    testHistory: "テスト履歴",
    noTestHistory: "テスト履歴なし",
    noTestHistoryDesc: "最初のスピードテストを開始して、ここに結果を表示してください",
    ipAddress: "IPアドレス",
    isp: "インターネットプロバイダー",
    realTimeAnalysis: "リアルタイム分析",
    secureConnection: "セキュア接続",
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ja: "日本語",
      ko: "한국어",
      zh: "中文"
    }
  },
  ko: {
    title: "속도 테스트",
    subtitle: "인터넷 연결 속도를 정밀하게 테스트하세요",
    readyToTest: "연결 테스트 준비 완료",
    testingLatency: "지연 시간 테스트 중",
    testingDownload: "다운로드 속도 테스트 중",
    testingUpload: "업로드 속도 테스트 중",
    testComplete: "테스트 완료",
    start: "시작",
    stop: "중지",
    speedTest: "속도 테스트",
    testing: "테스트 중...",
    speedResults: "속도 결과",
    downloadSpeed: "다운로드 속도",
    uploadSpeed: "업로드 속도",
    ping: "핑",
    mbpsDownload: "Mbps 다운로드",
    mbpsUpload: "Mbps 업로드",
    msPing: "ms 핑",
    serverSelection: "서버 선택",
    server: "서버",
    location: "위치",
    excellent: "우수",
    good: "양호",
    fair: "보통",
    testHistory: "테스트 기록",
    noTestHistory: "테스트 기록 없음",
    noTestHistoryDesc: "첫 번째 속도 테스트를 시작하여 여기에 결과를 확인하세요",
    ipAddress: "IP 주소",
    isp: "인터넷 서비스 제공업체",
    realTimeAnalysis: "실시간 분석",
    secureConnection: "보안 연결",
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ja: "日本語",
      ko: "한국어",
      zh: "中文"
    }
  },
  zh: {
    title: "网速测试",
    subtitle: "精确测试您的互联网连接速度",
    readyToTest: "准备测试您的连接",
    testingLatency: "正在测试延迟",
    testingDownload: "正在测试下载速度",
    testingUpload: "正在测试上传速度",
    testComplete: "测试完成",
    start: "开始",
    stop: "停止",
    speedTest: "网速测试",
    testing: "测试中...",
    speedResults: "速度结果",
    downloadSpeed: "下载速度",
    uploadSpeed: "上传速度",
    ping: "延迟",
    mbpsDownload: "Mbps 下载",
    mbpsUpload: "Mbps 上传",
    msPing: "ms 延迟",
    serverSelection: "服务器选择",
    server: "服务器",
    location: "位置",
    excellent: "优秀",
    good: "良好",
    fair: "一般",
    testHistory: "测试历史",
    noTestHistory: "无测试历史",
    noTestHistoryDesc: "开始您的第一次网速测试以在此查看结果",
    ipAddress: "IP地址",
    isp: "互联网服务提供商",
    realTimeAnalysis: "实时分析",
    secureConnection: "安全连接",
    languages: {
      en: "English",
      id: "Bahasa Indonesia",
      es: "Español",
      fr: "Français",
      de: "Deutsch",
      ja: "日本語",
      ko: "한국어",
      zh: "中文"
    }
  }
};