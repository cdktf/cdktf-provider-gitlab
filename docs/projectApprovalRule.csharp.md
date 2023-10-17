# `gitlab_project_approval_rule`

Refer to the Terraform Registory for docs: [`gitlab_project_approval_rule`](https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule).

# `projectApprovalRule` Submodule <a name="`projectApprovalRule` Submodule" id="@cdktf/provider-gitlab.projectApprovalRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ProjectApprovalRule <a name="ProjectApprovalRule" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule gitlab_project_approval_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectApprovalRule(Construct Scope, string Id, ProjectApprovalRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig">ProjectApprovalRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig">ProjectApprovalRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetDisableImportingDefaultAnyApproverRuleOnCreate">ResetDisableImportingDefaultAnyApproverRuleOnCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetGroupIds">ResetGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetProtectedBranchIds">ResetProtectedBranchIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetRuleType">ResetRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetUserIds">ResetUserIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `ResetDisableImportingDefaultAnyApproverRuleOnCreate` <a name="ResetDisableImportingDefaultAnyApproverRuleOnCreate" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetDisableImportingDefaultAnyApproverRuleOnCreate"></a>

```csharp
private void ResetDisableImportingDefaultAnyApproverRuleOnCreate()
```

##### `ResetGroupIds` <a name="ResetGroupIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetGroupIds"></a>

```csharp
private void ResetGroupIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProtectedBranchIds` <a name="ResetProtectedBranchIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetProtectedBranchIds"></a>

```csharp
private void ResetProtectedBranchIds()
```

##### `ResetRuleType` <a name="ResetRuleType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetRuleType"></a>

```csharp
private void ResetRuleType()
```

##### `ResetUserIds` <a name="ResetUserIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.resetUserIds"></a>

```csharp
private void ResetUserIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ProjectApprovalRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectApprovalRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectApprovalRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectApprovalRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

ProjectApprovalRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a ProjectApprovalRule resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ProjectApprovalRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ProjectApprovalRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the ProjectApprovalRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequiredInput">ApprovalsRequiredInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreateInput">DisableImportingDefaultAnyApproverRuleOnCreateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIdsInput">GroupIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIdsInput">ProtectedBranchIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleTypeInput">RuleTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIdsInput">UserIdsInput</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequired">ApprovalsRequired</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreate">DisableImportingDefaultAnyApproverRuleOnCreate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIds">GroupIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIds">ProtectedBranchIds</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleType">RuleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIds">UserIds</a></code> | <code>double[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApprovalsRequiredInput`<sup>Optional</sup> <a name="ApprovalsRequiredInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequiredInput"></a>

```csharp
public double ApprovalsRequiredInput { get; }
```

- *Type:* double

---

##### `DisableImportingDefaultAnyApproverRuleOnCreateInput`<sup>Optional</sup> <a name="DisableImportingDefaultAnyApproverRuleOnCreateInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreateInput"></a>

```csharp
public object DisableImportingDefaultAnyApproverRuleOnCreateInput { get; }
```

- *Type:* object

---

##### `GroupIdsInput`<sup>Optional</sup> <a name="GroupIdsInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIdsInput"></a>

```csharp
public double[] GroupIdsInput { get; }
```

- *Type:* double[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ProtectedBranchIdsInput`<sup>Optional</sup> <a name="ProtectedBranchIdsInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIdsInput"></a>

```csharp
public double[] ProtectedBranchIdsInput { get; }
```

- *Type:* double[]

---

##### `RuleTypeInput`<sup>Optional</sup> <a name="RuleTypeInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleTypeInput"></a>

```csharp
public string RuleTypeInput { get; }
```

- *Type:* string

---

##### `UserIdsInput`<sup>Optional</sup> <a name="UserIdsInput" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIdsInput"></a>

```csharp
public double[] UserIdsInput { get; }
```

- *Type:* double[]

---

##### `ApprovalsRequired`<sup>Required</sup> <a name="ApprovalsRequired" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.approvalsRequired"></a>

```csharp
public double ApprovalsRequired { get; }
```

- *Type:* double

---

##### `DisableImportingDefaultAnyApproverRuleOnCreate`<sup>Required</sup> <a name="DisableImportingDefaultAnyApproverRuleOnCreate" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.disableImportingDefaultAnyApproverRuleOnCreate"></a>

```csharp
public object DisableImportingDefaultAnyApproverRuleOnCreate { get; }
```

- *Type:* object

---

##### `GroupIds`<sup>Required</sup> <a name="GroupIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.groupIds"></a>

```csharp
public double[] GroupIds { get; }
```

- *Type:* double[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `ProtectedBranchIds`<sup>Required</sup> <a name="ProtectedBranchIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.protectedBranchIds"></a>

```csharp
public double[] ProtectedBranchIds { get; }
```

- *Type:* double[]

---

##### `RuleType`<sup>Required</sup> <a name="RuleType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.ruleType"></a>

```csharp
public string RuleType { get; }
```

- *Type:* string

---

##### `UserIds`<sup>Required</sup> <a name="UserIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.userIds"></a>

```csharp
public double[] UserIds { get; }
```

- *Type:* double[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ProjectApprovalRuleConfig <a name="ProjectApprovalRuleConfig" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new ProjectApprovalRuleConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    double ApprovalsRequired,
    string Name,
    string Project,
    object DisableImportingDefaultAnyApproverRuleOnCreate = null,
    double[] GroupIds = null,
    string Id = null,
    double[] ProtectedBranchIds = null,
    string RuleType = null,
    double[] UserIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.approvalsRequired">ApprovalsRequired</a></code> | <code>double</code> | The number of approvals required for this rule. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the approval rule. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.project">Project</a></code> | <code>string</code> | The name or id of the project to add the approval rules. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.disableImportingDefaultAnyApproverRuleOnCreate">DisableImportingDefaultAnyApproverRuleOnCreate</a></code> | <code>object</code> | When this flag is set, the default `any_approver` rule will not be imported if present. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.groupIds">GroupIds</a></code> | <code>double[]</code> | A list of group IDs whose members can approve of the merge request. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#id ProjectApprovalRule#id}. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.protectedBranchIds">ProtectedBranchIds</a></code> | <code>double[]</code> | A list of protected branch IDs (not branch names) for which the rule applies. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.ruleType">RuleType</a></code> | <code>string</code> | String, defaults to 'regular'. |
| <code><a href="#@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.userIds">UserIds</a></code> | <code>double[]</code> | A list of specific User IDs to add to the list of approvers. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `ApprovalsRequired`<sup>Required</sup> <a name="ApprovalsRequired" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.approvalsRequired"></a>

```csharp
public double ApprovalsRequired { get; set; }
```

- *Type:* double

The number of approvals required for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#approvals_required ProjectApprovalRule#approvals_required}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the approval rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#name ProjectApprovalRule#name}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The name or id of the project to add the approval rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#project ProjectApprovalRule#project}

---

##### `DisableImportingDefaultAnyApproverRuleOnCreate`<sup>Optional</sup> <a name="DisableImportingDefaultAnyApproverRuleOnCreate" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.disableImportingDefaultAnyApproverRuleOnCreate"></a>

```csharp
public object DisableImportingDefaultAnyApproverRuleOnCreate { get; set; }
```

- *Type:* object

When this flag is set, the default `any_approver` rule will not be imported if present.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#disable_importing_default_any_approver_rule_on_create ProjectApprovalRule#disable_importing_default_any_approver_rule_on_create}

---

##### `GroupIds`<sup>Optional</sup> <a name="GroupIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.groupIds"></a>

```csharp
public double[] GroupIds { get; set; }
```

- *Type:* double[]

A list of group IDs whose members can approve of the merge request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#group_ids ProjectApprovalRule#group_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#id ProjectApprovalRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ProtectedBranchIds`<sup>Optional</sup> <a name="ProtectedBranchIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.protectedBranchIds"></a>

```csharp
public double[] ProtectedBranchIds { get; set; }
```

- *Type:* double[]

A list of protected branch IDs (not branch names) for which the rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#protected_branch_ids ProjectApprovalRule#protected_branch_ids}

---

##### `RuleType`<sup>Optional</sup> <a name="RuleType" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.ruleType"></a>

```csharp
public string RuleType { get; set; }
```

- *Type:* string

String, defaults to 'regular'.

The type of rule. `any_approver` is a pre-configured default rule with `approvals_required` at `0`. Valid values are `regular`, `any_approver`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#rule_type ProjectApprovalRule#rule_type}

---

##### `UserIds`<sup>Optional</sup> <a name="UserIds" id="@cdktf/provider-gitlab.projectApprovalRule.ProjectApprovalRuleConfig.property.userIds"></a>

```csharp
public double[] UserIds { get; set; }
```

- *Type:* double[]

A list of specific User IDs to add to the list of approvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/16.4.1/docs/resources/project_approval_rule#user_ids ProjectApprovalRule#user_ids}

---



