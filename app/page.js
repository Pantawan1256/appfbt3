 "use client";

import { useState } from "react";
import {
  Plane, Bell, Search, MapPin, CalendarDays, Users, ChevronRight,
  Heart, Star, Home, Bookmark, User, SlidersHorizontal, Wifi, Coffee,
  Car, Utensils, Bath, ArrowLeft, CheckCircle2, CreditCard, Wallet, Landmark
} from "lucide-react";

const hotels = [
  { id: 1, name: "โรงแรมเมฆินทร์วิว", location: "เชียงใหม่ ประเทศไทย", rating: "4.8", reviews: 1250, price: 1299, image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800", description: "โรงแรมบรรยากาศดี วิวสวย พร้อมสิ่งอำนวยความสะดวกครบครัน" },
  { id: 2, name: "โรงแรมเดอะบลู", location: "เชียงใหม่ ประเทศไทย", rating: "4.7", reviews: 856, price: 1199, image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800", description: "ที่พักสไตล์โมเดิร์น เหมาะสำหรับการพักผ่อน" },
  { id: 3, name: "โรงแรมซันไรส์", location: "กรุงเทพมหานคร ประเทศไทย", rating: "4.9", reviews: 650, price: 1799, image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800", description: "โรงแรมหรูใจกลางเมือง เดินทางสะดวก" },
  { id: 4, name: "โรงแรมกรีนรีสอร์ท", location: "ภูเก็ต ประเทศไทย", rating: "4.6", reviews: 743, price: 1599, image: "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800", description: "รีสอร์ทท่ามกลางธรรมชาติ พร้อมสระว่ายน้ำ" }
];
const money = n => n.toLocaleString("th-TH");

function StatusBar() {
  return <div className="status-bar"><span>9:41</span><span>●●● ▰ ▰</span></div>;
}
function BottomNav({ active, setActive }) {
  const items = [
    ["home", "หน้าหลัก", Home], ["search", "ค้นหา", Search],
    ["favorite", "รายการโปรด", Bookmark], ["profile", "บัญชี", User]
  ];
  return <nav className="bottom-nav">{items.map(([id, label, Icon]) =>
    <button key={id} className={`nav-item ${active === id ? "active" : ""}`} onClick={() => setActive(id)}>
      <Icon size={19}/><small>{label}</small>
    </button>)}</nav>;
}
function HotelCard({ hotel, favorite, toggleFavorite, onSelect }) {
  return <article className="hotel-card">
    <img src={hotel.image} alt={hotel.name} className="hotel-image"/>
    <div className="hotel-info">
      <div className="hotel-title-row"><strong>{hotel.name}</strong>
        <button className="heart-button" aria-label="บันทึกรายการโปรด" onClick={() => toggleFavorite(hotel.id)}>
          <Heart size={19} fill={favorite ? "#e35d76" : "none"} color={favorite ? "#e35d76" : "#555"}/>
        </button>
      </div>
      <div className="rating"><Star size={12} fill="#e8aa35" color="#e8aa35"/>{hotel.rating} ({hotel.reviews} รีวิว)</div>
      <div className="hotel-location"><MapPin size={12}/>{hotel.location}</div>
      <div className="price-row"><strong>฿{money(hotel.price)}</strong><span>/ คืน</span></div>
      <button className="detail-link" onClick={() => onSelect(hotel)}>ดูรายละเอียด <ChevronRight size={14}/></button>
    </div>
  </article>;
}
function HomeScreen({ favorites, toggleFavorite, onSelect, setActive }) {
  const [destination, setDestination] = useState("เชียงใหม่");
  const [date, setDate] = useState("12 - 13 พ.ย. 2569");
  const [guests, setGuests] = useState("ผู้เข้าพัก 1 คน");
  return <div className="phone-screen">
    <StatusBar/>
    <header className="app-header">
      <div className="brand"><div className="brand-icon"><Plane size={21}/></div>
        <div><h2>StayEasy</h2><small>จองที่พักง่าย ๆ ทุกการเดินทาง</small></div>
      </div><Bell size={21}/>
    </header>
    <div className="hero">
      <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=900" alt="โรงแรม"/>
      <div className="hero-overlay"><h2>พักสบาย<br/>ทุกการเดินทาง</h2><p>ค้นพบที่พักดี ๆ ในราคาที่ใช่</p></div>
    </div>
    <div className="search-box">
      <div className="search-field"><MapPin size={17}/><input value={destination} onChange={e => setDestination(e.target.value)} placeholder="เลือกจุดหมายปลายทาง"/><ChevronRight size={16}/></div>
      <div className="search-field"><CalendarDays size={17}/><input value={date} onChange={e => setDate(e.target.value)} aria-label="วันที่เข้าพัก"/><ChevronRight size={16}/></div>
      <div className="search-field"><Users size={17}/><select value={guests} onChange={e => setGuests(e.target.value)}>
        <option>ผู้เข้าพัก 1 คน</option><option>ผู้เข้าพัก 2 คน</option><option>ผู้เข้าพัก 3 คน</option><option>ผู้เข้าพัก 4 คน</option>
      </select><ChevronRight size={16}/></div>
      <button className="primary-button" onClick={() => setActive("search")}><Search size={17}/> ค้นหาที่พัก</button>
    </div>
    <section className="section">
      <div className="section-heading"><strong>แนะนำสำหรับคุณ</strong><button onClick={() => setActive("search")}>ดูทั้งหมด →</button></div>
      <div className="recommend-grid">{hotels.slice(0, 2).map(h => <div className="recommend-card" key={h.id}>
        <img src={h.image} alt={h.name}/>
        <button className="recommend-heart" onClick={() => toggleFavorite(h.id)}><Heart size={16} fill={favorites.includes(h.id) ? "#e35d76" : "none"}/></button>
        <strong>{h.name}</strong><small>★ {h.rating} · ฿{money(h.price)}</small>
        <button onClick={() => onSelect(h)}>ดูที่พัก</button>
      </div>)}</div>
    </section>
    <BottomNav active="home" setActive={setActive}/>
  </div>;
}
function SearchScreen({ favorites, toggleFavorite, onSelect, setActive }) {
  const [filter, setFilter] = useState("ทั้งหมด");
  const [sort, setSort] = useState("แนะนำ");
  const list = hotels.filter(h => filter === "ราคาไม่เกิน 1,300" ? h.price <= 1300 : filter === "ราคามากกว่า 1,300" ? h.price > 1300 : true)
    .sort((a, b) => sort === "ราคาถูกที่สุด" ? a.price - b.price : a.id - b.id);
  return <div className="phone-screen"><StatusBar/>
    <div className="screen-header"><button onClick={() => setActive("home")}><ArrowLeft/></button><strong>ผลการค้นหา</strong><SlidersHorizontal size={20}/></div>
    <div className="location-date"><span><MapPin size={14}/> กรุงเทพฯ ประเทศไทย</span><span><CalendarDays size={14}/> 12-13 พ.ย. 2569</span></div>
    <div className="filter-row">
      <select value={filter} onChange={e => setFilter(e.target.value)}><option>ทั้งหมด</option><option>ราคาไม่เกิน 1,300</option><option>ราคามากกว่า 1,300</option></select>
      <select value={sort} onChange={e => setSort(e.target.value)}><option>แนะนำ</option><option>ราคาถูกที่สุด</option></select>
      <button onClick={() => setFilter("ทั้งหมด")}>รีเซ็ต</button>
    </div>
    <div className="result-count">พบที่พัก {list.length} แห่ง</div>
    <div className="results-list">{list.map(h => <HotelCard key={h.id} hotel={h} favorite={favorites.includes(h.id)} toggleFavorite={toggleFavorite} onSelect={onSelect}/>)}</div>
    <BottomNav active="search" setActive={setActive}/>
  </div>;
}
function DetailScreen({ hotel, onBook, setActive }) {
  return <div className="phone-screen detail-screen">
    <div className="detail-cover"><img src={hotel.image} alt={hotel.name}/>
      <div className="cover-top"><button onClick={() => setActive("search")}><ArrowLeft/></button><div><Heart/><Bookmark/></div></div><span className="image-count">1 / 10</span>
    </div>
    <div className="detail-content">
      <div className="detail-title"><div><h3>{hotel.name}</h3><div className="rating"><Star size={13} fill="#e8aa35" color="#e8aa35"/>{hotel.rating} ({hotel.reviews} รีวิว)</div><small><MapPin size={12}/>{hotel.location}</small></div>
        <div className="detail-price"><strong>฿{money(hotel.price)}</strong><small>/ คืน</small></div>
      </div>
      <div className="amenities"><div><Wifi/><small>Wi-Fi ฟรี</small></div><div><Car/><small>ที่จอดรถ</small></div><div><Coffee/><small>อาหารเช้า</small></div><div><Bath/><small>สระว่ายน้ำ</small></div><div><Utensils/><small>ห้องอาหาร</small></div></div>
      <section className="detail-section"><h4>รายละเอียดที่พัก</h4><p>{hotel.description}</p></section>
      <section className="room-card"><img src="https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=500" alt="ห้องพัก"/><div><strong>ห้องดีลักซ์ เตียงใหญ่</strong><small>2 คน | 1 เตียงใหญ่</small><strong>฿{money(hotel.price)} / คืน</strong></div></section>
      <button className="primary-button book-button" onClick={onBook}>จองห้องพัก</button>
    </div>
  </div>;
}
function BookingScreen({ hotel, onComplete, setActive, bookingDone }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("card");
  const total = hotel.price + 200;
  if (bookingDone) return <div className="phone-screen success-screen"><StatusBar/><div className="success-content">
    <CheckCircle2 size={75} color="#269c7c"/><h2>จองสำเร็จแล้ว!</h2><p>ขอบคุณที่เลือกใช้บริการ StayEasy</p>
    <div className="success-detail"><strong>{hotel.name}</strong><span>ยอดชำระ ฿{money(total)}</span><span>สถานะ: ยืนยันการจองแล้ว</span></div>
    <button className="primary-button" onClick={() => setActive("home")}>กลับหน้าหลัก</button>
  </div></div>;
  return <div className="phone-screen booking-screen"><StatusBar/>
    <div className="screen-header"><button onClick={() => setActive("detail")}><ArrowLeft/></button><strong>ยืนยันการจอง</strong><CheckCircle2 size={21} color="#269c7c"/></div>
    <div className="booking-hotel"><img src={hotel.image} alt={hotel.name}/><div><strong>{hotel.name}</strong><small>เช็กอิน 12 พ.ย. 2569</small><small>เช็กเอาต์ 13 พ.ย. 2569</small><small>ผู้เข้าพัก 1 คน</small></div></div>
    <section className="booking-section"><h4>สรุปค่าใช้จ่าย</h4><div className="bill-row"><span>ราคาห้องพัก</span><span>฿{money(hotel.price)}</span></div><div className="bill-row"><span>ค่าบริการ</span><span>฿200</span></div><div className="bill-row total"><strong>รวมทั้งหมด</strong><strong>฿{money(total)}</strong></div></section>
    <section className="booking-section"><h4>ข้อมูลผู้เข้าพัก</h4><label>ชื่อ-นามสกุล</label><input placeholder="กรอกชื่อ-นามสกุล" value={name} onChange={e => setName(e.target.value)}/><label>เบอร์โทรศัพท์</label><input placeholder="กรอกเบอร์โทรศัพท์" value={phone} onChange={e => setPhone(e.target.value)}/></section>
    <section className="booking-section"><h4>ช่องทางการชำระเงิน</h4>
      {[["card","บัตรเครดิต / เดบิต",CreditCard],["wallet","พร้อมเพย์",Wallet],["bank","โอนเงินผ่านธนาคาร",Landmark]].map(([id,title,Icon]) =>
        <label className="payment-option" key={id}><input type="radio" name="payment" checked={payment === id} onChange={() => setPayment(id)}/><Icon size={18}/><span>{title}</span></label>)}
    </section>
    <button className="primary-button confirm-button" disabled={!name.trim() || !/^0[0-9]{9}$/.test(phone)} onClick={onComplete}>ยืนยันการจอง ฿{money(total)}</button>
    <small className="secure-text">🔒 ข้อมูลของคุณได้รับการปกป้อง</small>
  </div>;
}
export default function StayEasy() {
  const [favorites, setFavorites] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(hotels[0]);
  const [active, setActive] = useState("home");
  const [bookingDone, setBookingDone] = useState(false);
  const toggleFavorite = id => setFavorites(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
  const selectHotel = hotel => { setSelectedHotel(hotel); setActive("detail"); setBookingDone(false); };
  let screen;
  switch (active) {
    case "search": screen = <SearchScreen favorites={favorites} toggleFavorite={toggleFavorite} onSelect={selectHotel} setActive={setActive}/>; break;
    case "favorite": screen = <div className="phone-screen"><StatusBar/><div className="screen-header"><strong>รายการโปรด</strong><Heart color="#269c7c"/></div><div className="results-list">
      {hotels.filter(h => favorites.includes(h.id)).map(h => <HotelCard key={h.id} hotel={h} favorite toggleFavorite={toggleFavorite} onSelect={selectHotel}/>)}{favorites.length === 0 && <p className="empty-state">ยังไม่มีรายการโปรด</p>}
    </div><BottomNav active="favorite" setActive={setActive}/></div>; break;
    case "profile": screen = <div className="phone-screen"><StatusBar/><div className="screen-header"><strong>บัญชีของฉัน</strong></div><div className="profile-content"><div className="profile-avatar"><User size={40}/></div><h3>ผู้ใช้งาน StayEasy</h3><p>ยินดีต้อนรับสู่ StayEasy</p><div className="profile-menu"><span>ข้อมูลส่วนตัว <ChevronRight/></span><span>การจองของฉัน <ChevronRight/></span><span>รายการโปรด ({favorites.length}) <ChevronRight/></span><span>ตั้งค่าบัญชี <ChevronRight/></span><span>ช่วยเหลือ <ChevronRight/></span></div></div><BottomNav active="profile" setActive={setActive}/></div>; break;
    case "detail": screen = <DetailScreen hotel={selectedHotel} onBook={() => setActive("booking")} setActive={setActive}/>; break;
    case "booking": screen = <BookingScreen hotel={selectedHotel} onComplete={() => setBookingDone(true)} setActive={setActive} bookingDone={bookingDone}/>; break;
    default: screen = <HomeScreen favorites={favorites} toggleFavorite={toggleFavorite} onSelect={selectHotel} setActive={setActive}/>;
  }
  return <main className="app-background"><div className="decor decor-one">✈</div><div className="decor decor-two">✈</div>
    <div className="page-heading"><div className="brand-icon large"><Plane/></div><h1>StayEasy</h1><p>ค้นหาที่พักง่าย ๆ จองได้ทุกที่ ทุกเวลา</p></div>
    <div className="prototype-layout"><div className="preview-label">หน้าจอแอปพลิเคชัน</div><div className="live-preview">{screen}</div>
      <div className="prototype-controls">{[["home","หน้าหลัก"],["search","ผลการค้นหา"],["detail","รายละเอียด"],["booking","ยืนยันการจอง"],["favorite","รายการโปรด"],["profile","บัญชี"]].map(([id,label]) =>
        <button key={id} className={active === id ? "control-active" : ""} onClick={() => setActive(id)}>{label}</button>)}</div>
    </div><footer>© 2026 StayEasy Prototype | Hotel Booking Application</footer>
  </main>;
}
