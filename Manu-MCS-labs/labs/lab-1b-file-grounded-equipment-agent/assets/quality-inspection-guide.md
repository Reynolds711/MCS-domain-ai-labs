# Precision Parts Manufacturing
# Quality Inspection Guide: CNC Lathe Products

## Document Information
- **Document ID:** PPM-QI-001
- **Applies To:** All parts produced on CNC Lathe PPM-CNC-001
- **Version:** 2.2
- **Last Updated:** August 2024
- **Approved By:** Quality Manager
- **ISO Reference:** ISO 9001:2015, Section 8.6

---

## 1. PURPOSE AND SCOPE

### 1.1 Purpose
This guide defines the inspection procedures, measurement requirements, and acceptance criteria for all parts produced on the PT-2500 CNC Lathe at Precision Parts Manufacturing.

### 1.2 Scope
This document covers:
- First piece inspection requirements
- In-process inspection procedures
- Final inspection criteria
- Measurement equipment requirements
- Documentation requirements
- Non-conformance handling

### 1.3 Quality Objectives
- First pass yield: >98%
- Customer returns: <0.1%
- Inspection accuracy: 100% conformance to specifications

---

## 2. INSPECTION TYPES

### 2.1 First Piece Inspection (FPI)
**When Required:**
- Start of new production run
- After tool change
- After program modification
- After machine adjustment
- After shift change (if setup was involved)

**Who Performs:** Operator (verified by Quality if required by customer)

### 2.2 In-Process Inspection
**When Required:**
- Every nth piece (based on process control plan)
- After any machine stop >30 minutes
- Any time operator suspects an issue

**Who Performs:** Operator

### 2.3 Final Inspection
**When Required:**
- Before parts leave production area
- Before packaging
- Customer-specific requirements (see PO)

**Who Performs:** Quality Inspector

---

## 3. FIRST PIECE INSPECTION PROCEDURE

### 3.1 Preparation
1. Verify correct program is loaded (check part number)
2. Verify correct tooling is installed
3. Verify raw material matches work order
4. Review drawing for all inspection requirements
5. Gather required measurement equipment

### 3.2 First Piece Process

**Step 1: Run First Part**
- Run complete cycle at reduced speed (80%)
- Do NOT run additional parts until FPI is complete

**Step 2: Clean and Identify**
- Remove chips and coolant from part
- Mark part as "FPI" with paint marker

**Step 3: Measure All Critical Dimensions**
- Measure every dimension marked with ◆ on drawing
- Record all measurements on First Piece Inspection form
- Compare each measurement to tolerance

**Step 4: Visual Inspection**
- Check surface finish against standard
- Verify no burrs (or acceptable per drawing)
- Check for tool marks, chatter, or defects

**Step 5: Document and Approve**
- Complete FPI form with all measurements
- If all in-spec: Sign and approve
- If any out-of-spec: STOP, adjust, re-run FPI
- Retain first piece for reference during run

### 3.3 First Piece Form Requirements

| Field | Required Information |
|-------|---------------------|
| Part Number | As shown on drawing |
| Work Order | From production schedule |
| Operation | CNC Turning - Op 10 (or applicable) |
| Machine ID | PPM-CNC-001 |
| Operator | Name and employee ID |
| Date/Time | Date and shift |
| Program Number | CNC program ID |
| Material | Material specification and lot |
| All Dimensions | Actual measured values |
| Go/No-Go Results | Pass or Fail for each |
| Visual | Acceptable or Not Acceptable |
| Approval Signature | Operator (and QC if required) |

---

## 4. DIMENSIONAL INSPECTION REQUIREMENTS

### 4.1 Common Part Features and Tolerances

#### Shaft Diameters
| Feature | Standard Tolerance | Measurement Method |
|---------|-------------------|-------------------|
| Rough Diameter | ±0.05 mm (±0.002") | Micrometer |
| Finish Diameter | ±0.025 mm (±0.001") | Micrometer |
| Precision Diameter | ±0.0125 mm (±0.0005") | Bore gauge or CMM |

#### Lengths
| Feature | Standard Tolerance | Measurement Method |
|---------|-------------------|-------------------|
| Overall Length | ±0.25 mm (±0.010") | Caliper |
| Step Length | ±0.05 mm (±0.002") | Depth micrometer |
| Face to Feature | ±0.025 mm (±0.001") | Height gauge or CMM |

#### Threading
| Feature | Specification | Measurement Method |
|---------|--------------|-------------------|
| External Thread | Class 2A (or per drawing) | Thread ring gauge |
| Internal Thread | Class 2B (or per drawing) | Thread plug gauge |
| Thread Pitch Diameter | Per ANSI/ASME B1.1 | Thread micrometer |

#### Surface Finish
| Requirement | Ra Value | Measurement Method |
|-------------|----------|-------------------|
| As-Machined | 3.2 μm (125 μin) | Profilometer |
| Standard Finish | 1.6 μm (63 μin) | Profilometer |
| Fine Finish | 0.8 μm (32 μin) | Profilometer |

---

## 5. PART-SPECIFIC INSPECTION CRITERIA

### 5.1 Part Number: 1001 - Drive Shaft
**Material:** 1045 Steel
**Critical Features:** 

| Feature | Dimension | Tolerance | Method |
|---------|-----------|-----------|--------|
| Bearing Journal OD | 25.000 mm | ±0.008 mm | Micrometer |
| Shoulder OD | 32.000 mm | ±0.025 mm | Micrometer |
| Overall Length | 150.00 mm | ±0.25 mm | Caliper |
| Journal Length | 35.00 mm | ±0.05 mm | Depth mic |
| Thread M20x1.5-6g | Class 2A | Go/No-Go | Thread gauge |
| Journal Surface | Ra 0.8 μm | Max | Profilometer |
| Concentricity | - | 0.02 mm TIR | V-blocks + indicator |

**Inspection Frequency:** 100% on critical dimensions, SPC on journal OD

### 5.2 Part Number: 1002 - Coupling Sleeve
**Material:** 304 Stainless Steel
**Critical Features:**

| Feature | Dimension | Tolerance | Method |
|---------|-----------|-----------|--------|
| Bore ID | 20.000 mm | +0.025/+0.010 mm | Bore gauge |
| OD | 35.000 mm | ±0.025 mm | Micrometer |
| Overall Length | 45.00 mm | ±0.10 mm | Caliper |
| Keyway Width | 6.00 mm | +0.030/0 mm | Pin gauge |
| Keyway Depth | 3.50 mm | +0.10/0 mm | Depth mic |
| Bore Surface | Ra 1.6 μm | Max | Profilometer |

**Inspection Frequency:** 100% on bore ID, 1 in 10 on other features

### 5.3 Part Number: 1003 - Adapter Bushing
**Material:** 6061-T6 Aluminum
**Critical Features:**

| Feature | Dimension | Tolerance | Method |
|---------|-----------|-----------|--------|
| OD | 50.000 mm | ±0.025 mm | Micrometer |
| ID | 38.000 mm | +0.025/0 mm | Bore gauge |
| Flange OD | 70.000 mm | ±0.05 mm | Micrometer |
| Overall Length | 30.00 mm | ±0.05 mm | Caliper |
| Flange Thickness | 5.00 mm | ±0.10 mm | Caliper |
| Perpendicularity | - | 0.03 mm | CMM |

**Inspection Frequency:** 100% on ID and OD

---

## 6. MEASUREMENT EQUIPMENT

### 6.1 Required Equipment by Measurement Type

| Measurement | Equipment | Accuracy Required |
|-------------|-----------|-------------------|
| External Diameter | Outside Micrometer | ±0.001 mm |
| Internal Diameter | Bore Gauge or Inside Mic | ±0.002 mm |
| Length | Digital Caliper | ±0.02 mm |
| Depth | Depth Micrometer | ±0.01 mm |
| Thread | Go/No-Go Gauges | Per ANSI |
| Surface Finish | Profilometer | ±10% of reading |
| Concentricity | V-Blocks + Indicator | 0.001 mm resolution |

### 6.2 Calibration Requirements
All measurement equipment must be:
- Calibrated per PPM-CAL-001
- Within calibration date (check sticker)
- Traceable to NIST standards

**If equipment is out of calibration:** Do NOT use. Report to Quality.

### 6.3 Measurement Equipment at CNC Lathe

| Equipment | ID Number | Location | Calibration Due |
|-----------|-----------|----------|-----------------|
| Outside Mic 0-25mm | MIC-001 | Tool cabinet | Per sticker |
| Outside Mic 25-50mm | MIC-002 | Tool cabinet | Per sticker |
| Digital Caliper 150mm | CAL-005 | Tool cabinet | Per sticker |
| Depth Micrometer | DMC-003 | Tool cabinet | Per sticker |
| Thread Ring M20x1.5 Go | TRG-010 | Gauge cabinet | Per sticker |
| Thread Ring M20x1.5 NoGo | TRG-011 | Gauge cabinet | Per sticker |
| Bore Gauge 18-35mm | BRG-002 | Gauge cabinet | Per sticker |

---

## 7. IN-PROCESS INSPECTION

### 7.1 Sampling Plan
Based on process capability and part criticality:

| Cpk Range | Sampling Frequency |
|-----------|-------------------|
| Cpk ≥ 2.0 | 1 per 50 parts |
| Cpk ≥ 1.67 | 1 per 25 parts |
| Cpk ≥ 1.33 | 1 per 10 parts |
| Cpk < 1.33 | 100% inspection |

### 7.2 In-Process Procedure
1. At designated interval, stop machine safely
2. Remove part and clean
3. Measure all SPC-controlled dimensions
4. Record on SPC chart
5. If in control: Continue production
6. If out of control: STOP, segregate suspect parts, notify supervisor

### 7.3 SPC Control Limits
Control limits are established per feature and posted at workstation. 

**Action Required:**
- One point outside control limits: Investigate, adjust if needed
- Two of three points beyond 2σ: Investigate
- Seven consecutive points on one side of mean: Adjust process

---

## 8. FINAL INSPECTION

### 8.1 Final Inspection Checklist

| Check | Requirement | Method |
|-------|-------------|--------|
| Quantity | Matches work order | Count |
| Dimensions | Per drawing/spec | Sampling or 100% |
| Visual | No defects, proper marking | Visual |
| Cleanliness | Free of chips, oil | Visual |
| Packaging | Per customer requirement | Visual |
| Documentation | FPI complete, traveler signed | Review |
| Traceability | Material cert, heat/lot number | Review |

### 8.2 Sampling for Final Inspection
Per ANSI/ASQ Z1.4 (or customer specification):

| Lot Size | Sample Size | Accept | Reject |
|----------|-------------|--------|--------|
| 2-8 | 2 | 0 | 1 |
| 9-15 | 3 | 0 | 1 |
| 16-25 | 5 | 0 | 1 |
| 26-50 | 8 | 0 | 1 |
| 51-90 | 13 | 1 | 2 |
| 91-150 | 20 | 1 | 2 |
| 151-280 | 32 | 2 | 3 |

---

## 9. NON-CONFORMANCE HANDLING

### 9.1 When Non-Conformance is Found

**STOP - CONTAIN - NOTIFY - DOCUMENT**

1. **STOP:** Halt production immediately
2. **CONTAIN:** Segregate suspect parts (use red tag)
3. **NOTIFY:** Inform supervisor and Quality
4. **DOCUMENT:** Complete Non-Conformance Report (NCR)

### 9.2 Segregation Requirements
- Place in red "HOLD" container
- Apply red "Non-Conforming" tag
- Record work order, quantity, defect description
- Do NOT mix with good parts
- Do NOT ship until disposition completed

### 9.3 Disposition Options
Quality determines disposition:
- **Use As-Is:** Acceptable for intended use (with documentation)
- **Rework:** Can be corrected to meet specification
- **Scrap:** Cannot be used or reworked
- **Return to Supplier:** Raw material non-conformance

### 9.4 NCR Required Information
- Part number and work order
- Quantity affected
- Defect description
- Actual vs. specified dimension
- Root cause (if known)
- Operator and machine ID
- Disposition decision
- Corrective action

---

## 10. DOCUMENTATION REQUIREMENTS

### 10.1 Required Records

| Document | Retention | Location |
|----------|-----------|----------|
| First Piece Inspection | 3 years | Quality files |
| SPC Charts | 3 years | Quality files |
| Final Inspection Records | 3 years | Quality files |
| Non-Conformance Reports | 5 years | Quality files |
| Calibration Records | Life of equipment + 3 years | Quality files |
| Material Certifications | 5 years | Quality files |

### 10.2 Traveler Requirements
Each work order traveler must include:
- Operator signature at each operation
- Inspection sign-off
- Material lot traceability
- Any deviations or notes

---

## APPENDIX: QUICK REFERENCE

### First Piece Checklist
1. ☐ Run first part at 80% speed
2. ☐ Mark part "FPI"
3. ☐ Measure all critical dimensions (◆)
4. ☐ Visual inspection
5. ☐ Complete FPI form
6. ☐ If all pass: Continue production
7. ☐ If any fail: STOP, adjust, re-run FPI

### When to Stop Production
- Any out-of-tolerance dimension
- Visual defect
- SPC out of control
- Equipment alarm
- Measurement equipment issue

### Key Contacts
- Quality Department: Ext. 2300
- Quality Manager: Ext. 2301
- Metrology Lab: Ext. 2310

### Common Tolerance Reference
| Class | Tolerance |
|-------|-----------|
| Standard | ±0.05 mm |
| Close | ±0.025 mm |
| Precision | ±0.0125 mm |

---

*This guide is controlled documentation. Do not modify without Quality Manager approval.*
*Document Control: PPM-QI-001 Rev 2.2*
