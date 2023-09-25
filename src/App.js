function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/apartments/:id" element={<ApartmentDscrpt />} />
          <Route path="/kasa-oc" element={<Home />} /> {/* Ajoutez cette ligne */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
