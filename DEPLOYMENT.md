# CookForMe - Deployment Guide (Ücretsiz)

## 🚀 Vercel ile Ücretsiz Deployment

Vercel, Next.js uygulamaları için en iyi ve ücretsiz hosting çözümüdür.

### Adım 1: Vercel Hesabı Oluşturma

1. [https://vercel.com](https://vercel.com) adresine gidin
2. "Sign Up" butonuna tıklayın
3. GitHub hesabınızla giriş yapın (önerilir)

### Adım 2: Projeyi GitHub'a Yükleme

Terminalden şu komutları çalıştırın:

```bash
cd "/Users/mustafacaliskan/Library/Mobile Documents/com~apple~CloudDocs/Dersler/AD 432/web app/cookforme-mvp"

# Git repository başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit - CookForMe MVP"
```

**GitHub'da yeni repository oluşturun:**
1. [https://github.com/new](https://github.com/new) adresine gidin
2. Repository adı: `cookforme-mvp`
3. Public veya Private seçin
4. "Create repository" butonuna tıklayın

**Kodu GitHub'a push edin:**
```bash
# GitHub repository URL'inizi buraya yazın
git remote add origin https://github.com/KULLANICI_ADINIZ/cookforme-mvp.git
git branch -M main
git push -u origin main
```

### Adım 3: Vercel'de Deploy

1. Vercel dashboard'da "Add New Project" butonuna tıklayın
2. GitHub repository'nizi seçin (`cookforme-mvp`)
3. **Environment Variables ekleyin:**
   - `NEXT_PUBLIC_SUPABASE_URL`: Supabase proje URL'niz
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anon key'iniz
4. "Deploy" butonuna tıklayın

⏱️ **Deployment süresi:** ~2-3 dakika

✅ **Deployment tamamlandığında** ücretsiz bir URL alacaksınız:
`https://cookforme-mvp-xyz.vercel.app`

---

## 🌐 Domain Bağlama

### Seçenek 1: Ücretsiz Subdomain (.vercel.app)

Vercel otomatik olarak ücretsiz subdomain verir:
- `cookforme-mvp.vercel.app`
- Vercel dashboard'dan projenize özel isim verebilirsiniz

### Seçenek 2: Kendi Domain'iniz (Ücretli)

#### A) Domain Satın Alma

**Türkiye için önerilen platformlar:**
1. **NameCheap** - [https://www.namecheap.com](https://www.namecheap.com)
   - `.com`: ~$10-15/yıl
   - `.io`: ~$30-40/yıl
   - `.co`: ~$10-15/yıl

2. **GoDaddy** - [https://www.godaddy.com](https://www.godaddy.com)
   - Türkçe destek mevcut

3. **Cloudflare Domains** - [https://www.cloudflare.com/products/registrar/](https://www.cloudflare.com/products/registrar/)
   - En ucuz fiyatlar (maliyet fiyatına)

**Önerilen domain isimleri:**
- `cookfor.me` (eğer müsait ise)
- `cookformee.com`
- `cookforme.co`
- `cookforme.io`

#### B) Domain'i Vercel'e Bağlama

1. **Vercel Dashboard'da:**
   - Projenize gidin
   - "Settings" > "Domains"
   - Domain adınızı girin (örn: `cookforme.com`)
   - "Add" butonuna tıklayın

2. **Domain sağlayıcınızda (NameCheap, GoDaddy vb.):**
   
   Vercel size DNS kayıtları verecek. Bunları ekleyin:

   **A Record:**
   ```
   Type: A
   Host: @
   Value: 76.76.21.21
   ```

   **CNAME Record (www için):**
   ```
   Type: CNAME
   Host: www
   Value: cname.vercel-dns.com
   ```

3. **DNS yayılmasını bekleyin:** 5-30 dakika

✅ **Tamamlandı!** Artık sitenize kendi domain'inizle erişebilirsiniz.

---

## 🔄 Güncellemeleri Deploy Etme

Kod değişikliği yaptıktan sonra:

```bash
git add .
git commit -m "Değişiklik açıklaması"
git push
```

Vercel otomatik olarak yeni değişiklikleri deploy eder! 🎉

---

## 💡 Alternatif Ücretsiz Hosting Seçenekleri

### 1. **Netlify**
- URL: [https://www.netlify.com](https://www.netlify.com)
- Vercel'e benzer, yine ücretsiz
- Adımlar neredeyse aynı

### 2. **Railway**
- URL: [https://railway.app](https://railway.app)
- $5 ücretsiz kredi/ay
- Database dahil

### 3. **Render**
- URL: [https://render.com](https://render.com)
- Ücretsiz tier mevcut
- Biraz daha yavaş deployment

---

## 📊 Supabase Database Kurulumu

Deployment'tan önce mutlaka:

1. [Supabase](https://supabase.com) hesabı oluşturun
2. Yeni proje açın
3. `SUPABASE_SETUP.md` dosyasındaki SQL'i çalıştırın
4. API credentials'ları Vercel'e ekleyin

---

## ⚠️ Önemli Notlar

1. **Environment Variables:** Vercel dashboard'da mutlaka ekleyin
2. **Git Ignore:** `.env.local` dosyası GitHub'a yüklenmez (güvenlik)
3. **Build Hataları:** Vercel deployment loglarını kontrol edin
4. **Güncellemeler:** Her git push otomatik deploy tetikler

---

## 🎯 Sonuç

✅ Ücretsiz hosting: Vercel  
✅ Ücretsiz database: Supabase  
💰 Sadece domain için ücret: ~$10-15/yıl  

**Toplam ilk yıl maliyeti:** ~$10-15 (sadece domain)
