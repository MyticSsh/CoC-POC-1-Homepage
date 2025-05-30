-- 데이터베이스 초기화 스크립트
-- PostgreSQL 컨테이너 시작 시 자동으로 실행됩니다

-- 연락처 문의 테이블
CREATE TABLE IF NOT EXISTS contact_inquiries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(200) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 인덱스 생성
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_created_at ON contact_inquiries(created_at);

-- 업데이트 시간 자동 갱신 함수
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = CURRENT_TIMESTAMP;
    RETURN NEW;
END;
$$ language 'plpgsql';

-- 트리거 생성
CREATE TRIGGER update_contact_inquiries_updated_at 
    BEFORE UPDATE ON contact_inquiries 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();
