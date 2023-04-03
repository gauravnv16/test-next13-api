/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env:{
    DATABASE_URL:"postgresql://postgres:Amirtha28$$1@db.onyczlmivajzwtwvjwvu.supabase.co:5432/postgres"
  }
}

module.exports = nextConfig
