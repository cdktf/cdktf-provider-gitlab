# `serviceEmailsOnPush` Submodule <a name="`serviceEmailsOnPush` Submodule" id="@cdktf/provider-gitlab.serviceEmailsOnPush"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServiceEmailsOnPush <a name="ServiceEmailsOnPush" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push gitlab_service_emails_on_push}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ServiceEmailsOnPush(Construct Scope, string Id, ServiceEmailsOnPushConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig">ServiceEmailsOnPushConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig">ServiceEmailsOnPushConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetBranchesToBeNotified">ResetBranchesToBeNotified</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetDisableDiffs">ResetDisableDiffs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetPushEvents">ResetPushEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetSendFromCommitterEmail">ResetSendFromCommitterEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetTagPushEvents">ResetTagPushEvents</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBranchesToBeNotified` <a name="ResetBranchesToBeNotified" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetBranchesToBeNotified"></a>

```csharp
private void ResetBranchesToBeNotified()
```

##### `ResetDisableDiffs` <a name="ResetDisableDiffs" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetDisableDiffs"></a>

```csharp
private void ResetDisableDiffs()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPushEvents` <a name="ResetPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetPushEvents"></a>

```csharp
private void ResetPushEvents()
```

##### `ResetSendFromCommitterEmail` <a name="ResetSendFromCommitterEmail" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetSendFromCommitterEmail"></a>

```csharp
private void ResetSendFromCommitterEmail()
```

##### `ResetTagPushEvents` <a name="ResetTagPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.resetTagPushEvents"></a>

```csharp
private void ResetTagPushEvents()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ServiceEmailsOnPush resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ServiceEmailsOnPush.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ServiceEmailsOnPush.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ServiceEmailsOnPush.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ServiceEmailsOnPush.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ServiceEmailsOnPush resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ServiceEmailsOnPush to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ServiceEmailsOnPush that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ServiceEmailsOnPush to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.active">Active</a></code> | <code>HashiCorp.Cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.slug">Slug</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.title">Title</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotifiedInput">BranchesToBeNotifiedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffsInput">DisableDiffsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEventsInput">PushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipientsInput">RecipientsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmailInput">SendFromCommitterEmailInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEventsInput">TagPushEventsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffs">DisableDiffs</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEvents">PushEvents</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipients">Recipients</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmail">SendFromCommitterEmail</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Active`<sup>Required</sup> <a name="Active" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.active"></a>

```csharp
public IResolvable Active { get; }
```

- *Type:* HashiCorp.Cdktf.IResolvable

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Slug`<sup>Required</sup> <a name="Slug" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.slug"></a>

```csharp
public string Slug { get; }
```

- *Type:* string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.title"></a>

```csharp
public string Title { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `BranchesToBeNotifiedInput`<sup>Optional</sup> <a name="BranchesToBeNotifiedInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotifiedInput"></a>

```csharp
public string BranchesToBeNotifiedInput { get; }
```

- *Type:* string

---

##### `DisableDiffsInput`<sup>Optional</sup> <a name="DisableDiffsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffsInput"></a>

```csharp
public object DisableDiffsInput { get; }
```

- *Type:* object

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `PushEventsInput`<sup>Optional</sup> <a name="PushEventsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEventsInput"></a>

```csharp
public object PushEventsInput { get; }
```

- *Type:* object

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipientsInput"></a>

```csharp
public string RecipientsInput { get; }
```

- *Type:* string

---

##### `SendFromCommitterEmailInput`<sup>Optional</sup> <a name="SendFromCommitterEmailInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmailInput"></a>

```csharp
public object SendFromCommitterEmailInput { get; }
```

- *Type:* object

---

##### `TagPushEventsInput`<sup>Optional</sup> <a name="TagPushEventsInput" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEventsInput"></a>

```csharp
public object TagPushEventsInput { get; }
```

- *Type:* object

---

##### `BranchesToBeNotified`<sup>Required</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; }
```

- *Type:* string

---

##### `DisableDiffs`<sup>Required</sup> <a name="DisableDiffs" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.disableDiffs"></a>

```csharp
public object DisableDiffs { get; }
```

- *Type:* object

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `PushEvents`<sup>Required</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.pushEvents"></a>

```csharp
public object PushEvents { get; }
```

- *Type:* object

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.recipients"></a>

```csharp
public string Recipients { get; }
```

- *Type:* string

---

##### `SendFromCommitterEmail`<sup>Required</sup> <a name="SendFromCommitterEmail" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.sendFromCommitterEmail"></a>

```csharp
public object SendFromCommitterEmail { get; }
```

- *Type:* object

---

##### `TagPushEvents`<sup>Required</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; }
```

- *Type:* object

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPush.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServiceEmailsOnPushConfig <a name="ServiceEmailsOnPushConfig" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ServiceEmailsOnPushConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Project,
    string Recipients,
    string BranchesToBeNotified = null,
    object DisableDiffs = null,
    string Id = null,
    object PushEvents = null,
    object SendFromCommitterEmail = null,
    object TagPushEvents = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.project">Project</a></code> | <code>string</code> | ID or full-path of the project you want to activate integration on. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.recipients">Recipients</a></code> | <code>string</code> | Emails separated by whitespace. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.branchesToBeNotified">BranchesToBeNotified</a></code> | <code>string</code> | Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.disableDiffs">DisableDiffs</a></code> | <code>object</code> | Disable code diffs. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push#id ServiceEmailsOnPush#id}. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.pushEvents">PushEvents</a></code> | <code>object</code> | Enable notifications for push events. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.sendFromCommitterEmail">SendFromCommitterEmail</a></code> | <code>object</code> | Send from committer. |
| <code><a href="#@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.tagPushEvents">TagPushEvents</a></code> | <code>object</code> | Enable notifications for tag push events. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

ID or full-path of the project you want to activate integration on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push#project ServiceEmailsOnPush#project}

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.recipients"></a>

```csharp
public string Recipients { get; set; }
```

- *Type:* string

Emails separated by whitespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push#recipients ServiceEmailsOnPush#recipients}

---

##### `BranchesToBeNotified`<sup>Optional</sup> <a name="BranchesToBeNotified" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.branchesToBeNotified"></a>

```csharp
public string BranchesToBeNotified { get; set; }
```

- *Type:* string

Branches to send notifications for. Valid options are `all`, `default`, `protected`, `default_and_protected`. Notifications are always fired for tag pushes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push#branches_to_be_notified ServiceEmailsOnPush#branches_to_be_notified}

---

##### `DisableDiffs`<sup>Optional</sup> <a name="DisableDiffs" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.disableDiffs"></a>

```csharp
public object DisableDiffs { get; set; }
```

- *Type:* object

Disable code diffs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push#disable_diffs ServiceEmailsOnPush#disable_diffs}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push#id ServiceEmailsOnPush#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PushEvents`<sup>Optional</sup> <a name="PushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.pushEvents"></a>

```csharp
public object PushEvents { get; set; }
```

- *Type:* object

Enable notifications for push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push#push_events ServiceEmailsOnPush#push_events}

---

##### `SendFromCommitterEmail`<sup>Optional</sup> <a name="SendFromCommitterEmail" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.sendFromCommitterEmail"></a>

```csharp
public object SendFromCommitterEmail { get; set; }
```

- *Type:* object

Send from committer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push#send_from_committer_email ServiceEmailsOnPush#send_from_committer_email}

---

##### `TagPushEvents`<sup>Optional</sup> <a name="TagPushEvents" id="@cdktf/provider-gitlab.serviceEmailsOnPush.ServiceEmailsOnPushConfig.property.tagPushEvents"></a>

```csharp
public object TagPushEvents { get; set; }
```

- *Type:* object

Enable notifications for tag push events.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.7.0/docs/resources/service_emails_on_push#tag_push_events ServiceEmailsOnPush#tag_push_events}

---



