--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

-- Started on 2021-11-26 19:14:24

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 2 (class 3079 OID 16384)
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- TOC entry 3330 (class 0 OID 0)
-- Dependencies: 2
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 212 (class 1259 OID 24610)
-- Name: event; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.event (
    id integer NOT NULL,
    start_date timestamp with time zone NOT NULL,
    end_date timestamp with time zone NOT NULL,
    name character varying NOT NULL,
    description character varying,
    "locationId" integer NOT NULL
);


ALTER TABLE public.event OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 24609)
-- Name: event_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.event_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.event_id_seq OWNER TO postgres;

--
-- TOC entry 3331 (class 0 OID 0)
-- Dependencies: 211
-- Name: event_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.event_id_seq OWNED BY public.event.id;


--
-- TOC entry 214 (class 1259 OID 24619)
-- Name: location; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.location (
    id integer NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.location OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 24618)
-- Name: location_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.location_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.location_id_seq OWNER TO postgres;

--
-- TOC entry 3332 (class 0 OID 0)
-- Dependencies: 213
-- Name: location_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.location_id_seq OWNED BY public.location.id;


--
-- TOC entry 210 (class 1259 OID 24604)
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO postgres;

--
-- TOC entry 3174 (class 2604 OID 24613)
-- Name: event id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event ALTER COLUMN id SET DEFAULT nextval('public.event_id_seq'::regclass);


--
-- TOC entry 3175 (class 2604 OID 24622)
-- Name: location id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location ALTER COLUMN id SET DEFAULT nextval('public.location_id_seq'::regclass);


--
-- TOC entry 3322 (class 0 OID 24610)
-- Dependencies: 212
-- Data for Name: event; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.event VALUES (1, '2021-11-20 00:00:00+00', '2021-11-25 00:00:00+00', 'Фестиваль в Москве', 'Описание фестиваля в Москве', 2);
INSERT INTO public.event VALUES (2, '2021-11-20 00:00:00+00', '2021-11-25 00:00:00+00', 'Фестиваль в Питере', 'Описание фестиваля в Питере', 1);
INSERT INTO public.event VALUES (3, '2021-11-20 00:00:00+00', '2021-11-25 00:00:00+00', 'Фестиваль в Перми', NULL, 3);


--
-- TOC entry 3324 (class 0 OID 24619)
-- Dependencies: 214
-- Data for Name: location; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public.location VALUES (1, 'Saint-Petersburg');
INSERT INTO public.location VALUES (2, 'Moscow');
INSERT INTO public.location VALUES (3, 'Perm');


--
-- TOC entry 3320 (class 0 OID 24604)
-- Dependencies: 210
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: postgres
--



--
-- TOC entry 3333 (class 0 OID 0)
-- Dependencies: 211
-- Name: event_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.event_id_seq', 3, true);


--
-- TOC entry 3334 (class 0 OID 0)
-- Dependencies: 213
-- Name: location_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.location_id_seq', 3, true);


--
-- TOC entry 3177 (class 2606 OID 24617)
-- Name: event PK_30c2f3bbaf6d34a55f8ae6e4614; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY (id);


--
-- TOC entry 3179 (class 2606 OID 24626)
-- Name: location PK_876d7bdba03c72251ec4c2dc827; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.location
    ADD CONSTRAINT "PK_876d7bdba03c72251ec4c2dc827" PRIMARY KEY (id);


--
-- TOC entry 3180 (class 2606 OID 24627)
-- Name: event FK_3abacb54776ac9da25ca49c609f; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.event
    ADD CONSTRAINT "FK_3abacb54776ac9da25ca49c609f" FOREIGN KEY ("locationId") REFERENCES public.location(id);


-- Completed on 2021-11-26 19:14:25

--
-- PostgreSQL database dump complete
--

