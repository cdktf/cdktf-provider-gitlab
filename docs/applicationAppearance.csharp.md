# `applicationAppearance` Submodule <a name="`applicationAppearance` Submodule" id="@cdktf/provider-gitlab.applicationAppearance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApplicationAppearance <a name="ApplicationAppearance" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance gitlab_application_appearance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ApplicationAppearance(Construct Scope, string Id, ApplicationAppearanceConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig">ApplicationAppearanceConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig">ApplicationAppearanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetEmailHeaderAndFooterEnabled">ResetEmailHeaderAndFooterEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetFooterMessage">ResetFooterMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetHeaderMessage">ResetHeaderMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetKeepSettingsOnDestroy">ResetKeepSettingsOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMemberGuidelines">ResetMemberGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageBackgroundColor">ResetMessageBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageFontColor">ResetMessageFontColor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetNewProjectGuidelines">ResetNewProjectGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetProfileImageGuidelines">ResetProfileImageGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaDescription">ResetPwaDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaName">ResetPwaName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaShortName">ResetPwaShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetEmailHeaderAndFooterEnabled` <a name="ResetEmailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetEmailHeaderAndFooterEnabled"></a>

```csharp
private void ResetEmailHeaderAndFooterEnabled()
```

##### `ResetFooterMessage` <a name="ResetFooterMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetFooterMessage"></a>

```csharp
private void ResetFooterMessage()
```

##### `ResetHeaderMessage` <a name="ResetHeaderMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetHeaderMessage"></a>

```csharp
private void ResetHeaderMessage()
```

##### `ResetKeepSettingsOnDestroy` <a name="ResetKeepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetKeepSettingsOnDestroy"></a>

```csharp
private void ResetKeepSettingsOnDestroy()
```

##### `ResetMemberGuidelines` <a name="ResetMemberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMemberGuidelines"></a>

```csharp
private void ResetMemberGuidelines()
```

##### `ResetMessageBackgroundColor` <a name="ResetMessageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageBackgroundColor"></a>

```csharp
private void ResetMessageBackgroundColor()
```

##### `ResetMessageFontColor` <a name="ResetMessageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetMessageFontColor"></a>

```csharp
private void ResetMessageFontColor()
```

##### `ResetNewProjectGuidelines` <a name="ResetNewProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetNewProjectGuidelines"></a>

```csharp
private void ResetNewProjectGuidelines()
```

##### `ResetProfileImageGuidelines` <a name="ResetProfileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetProfileImageGuidelines"></a>

```csharp
private void ResetProfileImageGuidelines()
```

##### `ResetPwaDescription` <a name="ResetPwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaDescription"></a>

```csharp
private void ResetPwaDescription()
```

##### `ResetPwaName` <a name="ResetPwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaName"></a>

```csharp
private void ResetPwaName()
```

##### `ResetPwaShortName` <a name="ResetPwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetPwaShortName"></a>

```csharp
private void ResetPwaShortName()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.resetTitle"></a>

```csharp
private void ResetTitle()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ApplicationAppearance.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ApplicationAppearance.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ApplicationAppearance.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ApplicationAppearance.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ApplicationAppearance resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ApplicationAppearance to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ApplicationAppearance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ApplicationAppearance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabledInput">EmailHeaderAndFooterEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessageInput">FooterMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessageInput">HeaderMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroyInput">KeepSettingsOnDestroyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelinesInput">MemberGuidelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColorInput">MessageBackgroundColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColorInput">MessageFontColorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelinesInput">NewProjectGuidelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelinesInput">ProfileImageGuidelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescriptionInput">PwaDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaNameInput">PwaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortNameInput">PwaShortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.titleInput">TitleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabled">EmailHeaderAndFooterEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessage">FooterMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessage">HeaderMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroy">KeepSettingsOnDestroy</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelines">MemberGuidelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColor">MessageBackgroundColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColor">MessageFontColor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelines">NewProjectGuidelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelines">ProfileImageGuidelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescription">PwaDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaName">PwaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortName">PwaShortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.title">Title</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EmailHeaderAndFooterEnabledInput`<sup>Optional</sup> <a name="EmailHeaderAndFooterEnabledInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabledInput"></a>

```csharp
public object EmailHeaderAndFooterEnabledInput { get; }
```

- *Type:* object

---

##### `FooterMessageInput`<sup>Optional</sup> <a name="FooterMessageInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessageInput"></a>

```csharp
public string FooterMessageInput { get; }
```

- *Type:* string

---

##### `HeaderMessageInput`<sup>Optional</sup> <a name="HeaderMessageInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessageInput"></a>

```csharp
public string HeaderMessageInput { get; }
```

- *Type:* string

---

##### `KeepSettingsOnDestroyInput`<sup>Optional</sup> <a name="KeepSettingsOnDestroyInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroyInput"></a>

```csharp
public object KeepSettingsOnDestroyInput { get; }
```

- *Type:* object

---

##### `MemberGuidelinesInput`<sup>Optional</sup> <a name="MemberGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelinesInput"></a>

```csharp
public string MemberGuidelinesInput { get; }
```

- *Type:* string

---

##### `MessageBackgroundColorInput`<sup>Optional</sup> <a name="MessageBackgroundColorInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColorInput"></a>

```csharp
public string MessageBackgroundColorInput { get; }
```

- *Type:* string

---

##### `MessageFontColorInput`<sup>Optional</sup> <a name="MessageFontColorInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColorInput"></a>

```csharp
public string MessageFontColorInput { get; }
```

- *Type:* string

---

##### `NewProjectGuidelinesInput`<sup>Optional</sup> <a name="NewProjectGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelinesInput"></a>

```csharp
public string NewProjectGuidelinesInput { get; }
```

- *Type:* string

---

##### `ProfileImageGuidelinesInput`<sup>Optional</sup> <a name="ProfileImageGuidelinesInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelinesInput"></a>

```csharp
public string ProfileImageGuidelinesInput { get; }
```

- *Type:* string

---

##### `PwaDescriptionInput`<sup>Optional</sup> <a name="PwaDescriptionInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescriptionInput"></a>

```csharp
public string PwaDescriptionInput { get; }
```

- *Type:* string

---

##### `PwaNameInput`<sup>Optional</sup> <a name="PwaNameInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaNameInput"></a>

```csharp
public string PwaNameInput { get; }
```

- *Type:* string

---

##### `PwaShortNameInput`<sup>Optional</sup> <a name="PwaShortNameInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortNameInput"></a>

```csharp
public string PwaShortNameInput { get; }
```

- *Type:* string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.titleInput"></a>

```csharp
public string TitleInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `EmailHeaderAndFooterEnabled`<sup>Required</sup> <a name="EmailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.emailHeaderAndFooterEnabled"></a>

```csharp
public object EmailHeaderAndFooterEnabled { get; }
```

- *Type:* object

---

##### `FooterMessage`<sup>Required</sup> <a name="FooterMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.footerMessage"></a>

```csharp
public string FooterMessage { get; }
```

- *Type:* string

---

##### `HeaderMessage`<sup>Required</sup> <a name="HeaderMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.headerMessage"></a>

```csharp
public string HeaderMessage { get; }
```

- *Type:* string

---

##### `KeepSettingsOnDestroy`<sup>Required</sup> <a name="KeepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.keepSettingsOnDestroy"></a>

```csharp
public object KeepSettingsOnDestroy { get; }
```

- *Type:* object

---

##### `MemberGuidelines`<sup>Required</sup> <a name="MemberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.memberGuidelines"></a>

```csharp
public string MemberGuidelines { get; }
```

- *Type:* string

---

##### `MessageBackgroundColor`<sup>Required</sup> <a name="MessageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageBackgroundColor"></a>

```csharp
public string MessageBackgroundColor { get; }
```

- *Type:* string

---

##### `MessageFontColor`<sup>Required</sup> <a name="MessageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.messageFontColor"></a>

```csharp
public string MessageFontColor { get; }
```

- *Type:* string

---

##### `NewProjectGuidelines`<sup>Required</sup> <a name="NewProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.newProjectGuidelines"></a>

```csharp
public string NewProjectGuidelines { get; }
```

- *Type:* string

---

##### `ProfileImageGuidelines`<sup>Required</sup> <a name="ProfileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.profileImageGuidelines"></a>

```csharp
public string ProfileImageGuidelines { get; }
```

- *Type:* string

---

##### `PwaDescription`<sup>Required</sup> <a name="PwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaDescription"></a>

```csharp
public string PwaDescription { get; }
```

- *Type:* string

---

##### `PwaName`<sup>Required</sup> <a name="PwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaName"></a>

```csharp
public string PwaName { get; }
```

- *Type:* string

---

##### `PwaShortName`<sup>Required</sup> <a name="PwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.pwaShortName"></a>

```csharp
public string PwaShortName { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearance.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ApplicationAppearanceConfig <a name="ApplicationAppearanceConfig" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ApplicationAppearanceConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Description = null,
    object EmailHeaderAndFooterEnabled = null,
    string FooterMessage = null,
    string HeaderMessage = null,
    object KeepSettingsOnDestroy = null,
    string MemberGuidelines = null,
    string MessageBackgroundColor = null,
    string MessageFontColor = null,
    string NewProjectGuidelines = null,
    string ProfileImageGuidelines = null,
    string PwaDescription = null,
    string PwaName = null,
    string PwaShortName = null,
    string Title = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.description">Description</a></code> | <code>string</code> | Markdown text shown on the sign-in and sign-up page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.emailHeaderAndFooterEnabled">EmailHeaderAndFooterEnabled</a></code> | <code>object</code> | Add header and footer to all outgoing emails if enabled. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.footerMessage">FooterMessage</a></code> | <code>string</code> | Message in the system footer bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.headerMessage">HeaderMessage</a></code> | <code>string</code> | Message in the system header bar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.keepSettingsOnDestroy">KeepSettingsOnDestroy</a></code> | <code>object</code> | Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.memberGuidelines">MemberGuidelines</a></code> | <code>string</code> | Markdown text shown on the group or project member page for users with permission to change members. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageBackgroundColor">MessageBackgroundColor</a></code> | <code>string</code> | Background color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageFontColor">MessageFontColor</a></code> | <code>string</code> | Font color for the system header or footer bar, in CSS hex notation. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.newProjectGuidelines">NewProjectGuidelines</a></code> | <code>string</code> | Markdown text shown on the new project page. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.profileImageGuidelines">ProfileImageGuidelines</a></code> | <code>string</code> | Markdown text shown on the profile page below the Public Avatar. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaDescription">PwaDescription</a></code> | <code>string</code> | An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaName">PwaName</a></code> | <code>string</code> | Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaShortName">PwaShortName</a></code> | <code>string</code> | Short name for Progressive Web App. |
| <code><a href="#@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.title">Title</a></code> | <code>string</code> | Application title on the sign-in and sign-up page. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Markdown text shown on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#description ApplicationAppearance#description}

---

##### `EmailHeaderAndFooterEnabled`<sup>Optional</sup> <a name="EmailHeaderAndFooterEnabled" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.emailHeaderAndFooterEnabled"></a>

```csharp
public object EmailHeaderAndFooterEnabled { get; set; }
```

- *Type:* object

Add header and footer to all outgoing emails if enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#email_header_and_footer_enabled ApplicationAppearance#email_header_and_footer_enabled}

---

##### `FooterMessage`<sup>Optional</sup> <a name="FooterMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.footerMessage"></a>

```csharp
public string FooterMessage { get; set; }
```

- *Type:* string

Message in the system footer bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#footer_message ApplicationAppearance#footer_message}

---

##### `HeaderMessage`<sup>Optional</sup> <a name="HeaderMessage" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.headerMessage"></a>

```csharp
public string HeaderMessage { get; set; }
```

- *Type:* string

Message in the system header bar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#header_message ApplicationAppearance#header_message}

---

##### `KeepSettingsOnDestroy`<sup>Optional</sup> <a name="KeepSettingsOnDestroy" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.keepSettingsOnDestroy"></a>

```csharp
public object KeepSettingsOnDestroy { get; set; }
```

- *Type:* object

Set to true if the appearance settings should not be reset to their pre-terraform defaults on destroy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#keep_settings_on_destroy ApplicationAppearance#keep_settings_on_destroy}

---

##### `MemberGuidelines`<sup>Optional</sup> <a name="MemberGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.memberGuidelines"></a>

```csharp
public string MemberGuidelines { get; set; }
```

- *Type:* string

Markdown text shown on the group or project member page for users with permission to change members.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#member_guidelines ApplicationAppearance#member_guidelines}

---

##### `MessageBackgroundColor`<sup>Optional</sup> <a name="MessageBackgroundColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageBackgroundColor"></a>

```csharp
public string MessageBackgroundColor { get; set; }
```

- *Type:* string

Background color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#message_background_color ApplicationAppearance#message_background_color}

---

##### `MessageFontColor`<sup>Optional</sup> <a name="MessageFontColor" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.messageFontColor"></a>

```csharp
public string MessageFontColor { get; set; }
```

- *Type:* string

Font color for the system header or footer bar, in CSS hex notation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#message_font_color ApplicationAppearance#message_font_color}

---

##### `NewProjectGuidelines`<sup>Optional</sup> <a name="NewProjectGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.newProjectGuidelines"></a>

```csharp
public string NewProjectGuidelines { get; set; }
```

- *Type:* string

Markdown text shown on the new project page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#new_project_guidelines ApplicationAppearance#new_project_guidelines}

---

##### `ProfileImageGuidelines`<sup>Optional</sup> <a name="ProfileImageGuidelines" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.profileImageGuidelines"></a>

```csharp
public string ProfileImageGuidelines { get; set; }
```

- *Type:* string

Markdown text shown on the profile page below the Public Avatar.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#profile_image_guidelines ApplicationAppearance#profile_image_guidelines}

---

##### `PwaDescription`<sup>Optional</sup> <a name="PwaDescription" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaDescription"></a>

```csharp
public string PwaDescription { get; set; }
```

- *Type:* string

An explanation of what the Progressive Web App does. Used for the attribute `description` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#pwa_description ApplicationAppearance#pwa_description}

---

##### `PwaName`<sup>Optional</sup> <a name="PwaName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaName"></a>

```csharp
public string PwaName { get; set; }
```

- *Type:* string

Full name of the Progressive Web App. Used for the attribute `name` in `manifest.json`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#pwa_name ApplicationAppearance#pwa_name}

---

##### `PwaShortName`<sup>Optional</sup> <a name="PwaShortName" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.pwaShortName"></a>

```csharp
public string PwaShortName { get; set; }
```

- *Type:* string

Short name for Progressive Web App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#pwa_short_name ApplicationAppearance#pwa_short_name}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-gitlab.applicationAppearance.ApplicationAppearanceConfig.property.title"></a>

```csharp
public string Title { get; set; }
```

- *Type:* string

Application title on the sign-in and sign-up page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.1.0/docs/resources/application_appearance#title ApplicationAppearance#title}

---



