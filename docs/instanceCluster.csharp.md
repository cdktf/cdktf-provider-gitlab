# `instanceCluster` Submodule <a name="`instanceCluster` Submodule" id="@cdktf/provider-gitlab.instanceCluster"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### InstanceCluster <a name="InstanceCluster" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster gitlab_instance_cluster}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new InstanceCluster(Construct Scope, string Id, InstanceClusterConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig">InstanceClusterConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig">InstanceClusterConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetEnvironmentScope">ResetEnvironmentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesAuthorizationType">ResetKubernetesAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesCaCert">ResetKubernetesCaCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesNamespace">ResetKubernetesNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetManaged">ResetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetManagementProjectId">ResetManagementProjectId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetEnvironmentScope` <a name="ResetEnvironmentScope" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetEnvironmentScope"></a>

```csharp
private void ResetEnvironmentScope()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetKubernetesAuthorizationType` <a name="ResetKubernetesAuthorizationType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesAuthorizationType"></a>

```csharp
private void ResetKubernetesAuthorizationType()
```

##### `ResetKubernetesCaCert` <a name="ResetKubernetesCaCert" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesCaCert"></a>

```csharp
private void ResetKubernetesCaCert()
```

##### `ResetKubernetesNamespace` <a name="ResetKubernetesNamespace" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetKubernetesNamespace"></a>

```csharp
private void ResetKubernetesNamespace()
```

##### `ResetManaged` <a name="ResetManaged" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetManaged"></a>

```csharp
private void ResetManaged()
```

##### `ResetManagementProjectId` <a name="ResetManagementProjectId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.resetManagementProjectId"></a>

```csharp
private void ResetManagementProjectId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a InstanceCluster resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

InstanceCluster.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

InstanceCluster.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

InstanceCluster.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

InstanceCluster.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a InstanceCluster resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the InstanceCluster to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing InstanceCluster that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the InstanceCluster to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.clusterType">ClusterType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.platformType">PlatformType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.providerType">ProviderType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.enabledInput">EnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.environmentScopeInput">EnvironmentScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesApiUrlInput">KubernetesApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesAuthorizationTypeInput">KubernetesAuthorizationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesCaCertInput">KubernetesCaCertInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesNamespaceInput">KubernetesNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesTokenInput">KubernetesTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managedInput">ManagedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managementProjectIdInput">ManagementProjectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.enabled">Enabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.environmentScope">EnvironmentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesApiUrl">KubernetesApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesAuthorizationType">KubernetesAuthorizationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesToken">KubernetesToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managed">Managed</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managementProjectId">ManagementProjectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ClusterType`<sup>Required</sup> <a name="ClusterType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.clusterType"></a>

```csharp
public string ClusterType { get; }
```

- *Type:* string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `PlatformType`<sup>Required</sup> <a name="PlatformType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.platformType"></a>

```csharp
public string PlatformType { get; }
```

- *Type:* string

---

##### `ProviderType`<sup>Required</sup> <a name="ProviderType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.providerType"></a>

```csharp
public string ProviderType { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.enabledInput"></a>

```csharp
public object EnabledInput { get; }
```

- *Type:* object

---

##### `EnvironmentScopeInput`<sup>Optional</sup> <a name="EnvironmentScopeInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.environmentScopeInput"></a>

```csharp
public string EnvironmentScopeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KubernetesApiUrlInput`<sup>Optional</sup> <a name="KubernetesApiUrlInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesApiUrlInput"></a>

```csharp
public string KubernetesApiUrlInput { get; }
```

- *Type:* string

---

##### `KubernetesAuthorizationTypeInput`<sup>Optional</sup> <a name="KubernetesAuthorizationTypeInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesAuthorizationTypeInput"></a>

```csharp
public string KubernetesAuthorizationTypeInput { get; }
```

- *Type:* string

---

##### `KubernetesCaCertInput`<sup>Optional</sup> <a name="KubernetesCaCertInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesCaCertInput"></a>

```csharp
public string KubernetesCaCertInput { get; }
```

- *Type:* string

---

##### `KubernetesNamespaceInput`<sup>Optional</sup> <a name="KubernetesNamespaceInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesNamespaceInput"></a>

```csharp
public string KubernetesNamespaceInput { get; }
```

- *Type:* string

---

##### `KubernetesTokenInput`<sup>Optional</sup> <a name="KubernetesTokenInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesTokenInput"></a>

```csharp
public string KubernetesTokenInput { get; }
```

- *Type:* string

---

##### `ManagedInput`<sup>Optional</sup> <a name="ManagedInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managedInput"></a>

```csharp
public object ManagedInput { get; }
```

- *Type:* object

---

##### `ManagementProjectIdInput`<sup>Optional</sup> <a name="ManagementProjectIdInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managementProjectIdInput"></a>

```csharp
public string ManagementProjectIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.enabled"></a>

```csharp
public object Enabled { get; }
```

- *Type:* object

---

##### `EnvironmentScope`<sup>Required</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.environmentScope"></a>

```csharp
public string EnvironmentScope { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `KubernetesApiUrl`<sup>Required</sup> <a name="KubernetesApiUrl" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesApiUrl"></a>

```csharp
public string KubernetesApiUrl { get; }
```

- *Type:* string

---

##### `KubernetesAuthorizationType`<sup>Required</sup> <a name="KubernetesAuthorizationType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesAuthorizationType"></a>

```csharp
public string KubernetesAuthorizationType { get; }
```

- *Type:* string

---

##### `KubernetesCaCert`<sup>Required</sup> <a name="KubernetesCaCert" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesCaCert"></a>

```csharp
public string KubernetesCaCert { get; }
```

- *Type:* string

---

##### `KubernetesNamespace`<sup>Required</sup> <a name="KubernetesNamespace" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; }
```

- *Type:* string

---

##### `KubernetesToken`<sup>Required</sup> <a name="KubernetesToken" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.kubernetesToken"></a>

```csharp
public string KubernetesToken { get; }
```

- *Type:* string

---

##### `Managed`<sup>Required</sup> <a name="Managed" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managed"></a>

```csharp
public object Managed { get; }
```

- *Type:* object

---

##### `ManagementProjectId`<sup>Required</sup> <a name="ManagementProjectId" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.managementProjectId"></a>

```csharp
public string ManagementProjectId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.instanceCluster.InstanceCluster.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### InstanceClusterConfig <a name="InstanceClusterConfig" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new InstanceClusterConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string KubernetesApiUrl,
    string KubernetesToken,
    string Name,
    string Domain = null,
    object Enabled = null,
    string EnvironmentScope = null,
    string Id = null,
    string KubernetesAuthorizationType = null,
    string KubernetesCaCert = null,
    string KubernetesNamespace = null,
    object Managed = null,
    string ManagementProjectId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesApiUrl">KubernetesApiUrl</a></code> | <code>string</code> | The URL to access the Kubernetes API. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesToken">KubernetesToken</a></code> | <code>string</code> | The token to authenticate against Kubernetes. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.name">Name</a></code> | <code>string</code> | The name of cluster. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.domain">Domain</a></code> | <code>string</code> | The base domain of the cluster. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.enabled">Enabled</a></code> | <code>object</code> | Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.environmentScope">EnvironmentScope</a></code> | <code>string</code> | The associated environment to the cluster. Defaults to `*`. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#id InstanceCluster#id}. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesAuthorizationType">KubernetesAuthorizationType</a></code> | <code>string</code> | The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesCaCert">KubernetesCaCert</a></code> | <code>string</code> | TLS certificate (needed if API is using a self-signed TLS certificate). |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesNamespace">KubernetesNamespace</a></code> | <code>string</code> | The unique namespace related to the instance. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.managed">Managed</a></code> | <code>object</code> | Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read. |
| <code><a href="#@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.managementProjectId">ManagementProjectId</a></code> | <code>string</code> | The ID of the management project for the cluster. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `KubernetesApiUrl`<sup>Required</sup> <a name="KubernetesApiUrl" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesApiUrl"></a>

```csharp
public string KubernetesApiUrl { get; set; }
```

- *Type:* string

The URL to access the Kubernetes API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#kubernetes_api_url InstanceCluster#kubernetes_api_url}

---

##### `KubernetesToken`<sup>Required</sup> <a name="KubernetesToken" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesToken"></a>

```csharp
public string KubernetesToken { get; set; }
```

- *Type:* string

The token to authenticate against Kubernetes. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#kubernetes_token InstanceCluster#kubernetes_token}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#name InstanceCluster#name}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

The base domain of the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#domain InstanceCluster#domain}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.enabled"></a>

```csharp
public object Enabled { get; set; }
```

- *Type:* object

Determines if cluster is active or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#enabled InstanceCluster#enabled}

---

##### `EnvironmentScope`<sup>Optional</sup> <a name="EnvironmentScope" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.environmentScope"></a>

```csharp
public string EnvironmentScope { get; set; }
```

- *Type:* string

The associated environment to the cluster. Defaults to `*`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#environment_scope InstanceCluster#environment_scope}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#id InstanceCluster#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KubernetesAuthorizationType`<sup>Optional</sup> <a name="KubernetesAuthorizationType" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesAuthorizationType"></a>

```csharp
public string KubernetesAuthorizationType { get; set; }
```

- *Type:* string

The cluster authorization type. Valid values are `rbac`, `abac`, `unknown_authorization`. Defaults to `rbac`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#kubernetes_authorization_type InstanceCluster#kubernetes_authorization_type}

---

##### `KubernetesCaCert`<sup>Optional</sup> <a name="KubernetesCaCert" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesCaCert"></a>

```csharp
public string KubernetesCaCert { get; set; }
```

- *Type:* string

TLS certificate (needed if API is using a self-signed TLS certificate).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#kubernetes_ca_cert InstanceCluster#kubernetes_ca_cert}

---

##### `KubernetesNamespace`<sup>Optional</sup> <a name="KubernetesNamespace" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.kubernetesNamespace"></a>

```csharp
public string KubernetesNamespace { get; set; }
```

- *Type:* string

The unique namespace related to the instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#kubernetes_namespace InstanceCluster#kubernetes_namespace}

---

##### `Managed`<sup>Optional</sup> <a name="Managed" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.managed"></a>

```csharp
public object Managed { get; set; }
```

- *Type:* object

Determines if cluster is managed by gitlab or not. Defaults to `true`. This attribute cannot be read.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#managed InstanceCluster#managed}

---

##### `ManagementProjectId`<sup>Optional</sup> <a name="ManagementProjectId" id="@cdktf/provider-gitlab.instanceCluster.InstanceClusterConfig.property.managementProjectId"></a>

```csharp
public string ManagementProjectId { get; set; }
```

- *Type:* string

The ID of the management project for the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/17.7.1/docs/resources/instance_cluster#management_project_id InstanceCluster#management_project_id}

---



