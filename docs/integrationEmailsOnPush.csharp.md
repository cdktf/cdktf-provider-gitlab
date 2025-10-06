# `integrationEmailsOnPush` Submodule <a name="`integrationEmailsOnPush` Submodule" id="@cdktf/provider-gitlab.integrationEmailsOnPush"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationEmailsOnPush <a name="IntegrationEmailsOnPush" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push gitlab_integration_emails_on_push}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new IntegrationEmailsOnPush(Construct Scope, string Id, IntegrationEmailsOnPushConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig">IntegrationEmailsOnPushConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig">IntegrationEmailsOnPushConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetDisableDiffs">ResetDisableDiffs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetSendFromCommitterEmail">ResetSendFromCommitterEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetBranchesToBeNotified"></a>

```csharp
private void ResetBranchesToBeNotified()
```

##### `ResetDisableDiffs` <a name="ResetDisableDiffs" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetDisableDiffs"></a>

```csharp
private void ResetDisableDiffs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetPushEvents"></a>

```csharp
private void ResetPushEvents()
```

##### `ResetSendFromCommitterEmail` <a name="ResetSendFromCommitterEmail" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetSendFromCommitterEmail"></a>

```csharp
private void ResetSendFromCommitterEmail()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.resetTagPushEvents"></a>

```csharp
private void ResetTagPushEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a IntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationEmailsOnPush.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationEmailsOnPush.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationEmailsOnPush.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

IntegrationEmailsOnPush.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a IntegrationEmailsOnPush resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IntegrationEmailsOnPush to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IntegrationEmailsOnPush that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the IntegrationEmailsOnPush to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.slug">Slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffsInput">DisableDiffsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEventsInput">PushEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipientsInput">RecipientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmailInput">SendFromCommitterEmailInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffs">DisableDiffs</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEvents">PushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipients">Recipients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmail">SendFromCommitterEmail</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEvents">TagPushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.slug"></a>

```csharp
public string Slug { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotifiedInput"></a>

```csharp
public string BranchesToBeNotifiedInput { get; }
```

- *Type:* string

---

##### `DisableDiffsInput`<sup>Optional</sup> <a name="DisableDiffsInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffsInput"></a>

```csharp
public bool|IResolvable DisableDiffsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEventsInput"></a>

```csharp
public bool|IResolvable PushEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipientsInput"></a>

```csharp
public string RecipientsInput { get; }
```

- *Type:* string

---

##### `SendFromCommitterEmailInput`<sup>Optional</sup> <a name="SendFromCommitterEmailInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmailInput"></a>

```csharp
public bool|IResolvable SendFromCommitterEmailInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEventsInput"></a>

```csharp
public bool|IResolvable TagPushEventsInput { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; }
```

- *Type:* string

---

##### `DisableDiffs`<sup>Required</sup> <a name="DisableDiffs" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.disableDiffs"></a>

```csharp
public bool|IResolvable DisableDiffs { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.pushEvents"></a>

```csharp
public bool|IResolvable PushEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.recipients"></a>

```csharp
public string Recipients { get; }
```

- *Type:* string

---

##### `SendFromCommitterEmail`<sup>Required</sup> <a name="SendFromCommitterEmail" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.sendFromCommitterEmail"></a>

```csharp
public bool|IResolvable SendFromCommitterEmail { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tagPushEvents"></a>

```csharp
public bool|IResolvable TagPushEvents { get; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPush.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationEmailsOnPushConfig <a name="IntegrationEmailsOnPushConfig" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new IntegrationEmailsOnPushConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Project,
    string Recipients,
    string BranchesToBeNotified = null,
    bool|IResolvable DisableDiffs = null,
    string Id = null,
    bool|IResolvable PushEvents = null,
    bool|IResolvable SendFromCommitterEmail = null,
    bool|IResolvable TagPushEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.connection">Connection</a></code> | <code>HashiCorp.Cdktf.SSHProvisionerConnection\|HashiCorp.Cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.count">Count</a></code> | <code>double\|HashiCorp.Cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provisioners">Provisioners</a></code> | <code>HashiCorp.Cdktf.FileProvisioner\|HashiCorp.Cdktf.LocalExecProvisioner\|HashiCorp.Cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.project">Project</a></code> | <code>string</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.recipients">Recipients</a></code> | <code>string</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.disableDiffs">DisableDiffs</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push#id IntegrationEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.pushEvents">PushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.sendFromCommitterEmail">SendFromCommitterEmail</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>bool\|HashiCorp.Cdktf.IResolvable</code> | Enable notifications for tag push events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* HashiCorp.Cdktf.SSHProvisionerConnection|HashiCorp.Cdktf.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|HashiCorp.Cdktf.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* HashiCorp.Cdktf.FileProvisioner|HashiCorp.Cdktf.LocalExecProvisioner|HashiCorp.Cdktf.RemoteExecProvisioner[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push#project IntegrationEmailsOnPush#project}

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.recipients"></a>

```csharp
public string Recipients { get; set; }
```

- *Type:* string

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push#recipients IntegrationEmailsOnPush#recipients}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; set; }
```

- *Type:* string

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push#branches_to_be_notified IntegrationEmailsOnPush#branches_to_be_notified}

---

##### `DisableDiffs`<sup>Optional</sup> <a name="DisableDiffs" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.disableDiffs"></a>

```csharp
public bool|IResolvable DisableDiffs { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push#disable_diffs IntegrationEmailsOnPush#disable_diffs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push#id IntegrationEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.pushEvents"></a>

```csharp
public bool|IResolvable PushEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push#push_events IntegrationEmailsOnPush#push_events}

---

##### `SendFromCommitterEmail`<sup>Optional</sup> <a name="SendFromCommitterEmail" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.sendFromCommitterEmail"></a>

```csharp
public bool|IResolvable SendFromCommitterEmail { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push#send_from_committer_email IntegrationEmailsOnPush#send_from_committer_email}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.integrationEmailsOnPush.IntegrationEmailsOnPushConfig.property.tagPushEvents"></a>

```csharp
public bool|IResolvable TagPushEvents { get; set; }
```

- *Type:* bool|HashiCorp.Cdktf.IResolvable

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/18.4.1/docs/resources/integration_emails_on_push#tag_push_events IntegrationEmailsOnPush#tag_push_events}

---



