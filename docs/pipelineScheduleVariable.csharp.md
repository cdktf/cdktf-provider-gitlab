# `gitlab_pipeline_schedule_variable`

Refer to the Terraform Registory for docs: [`gitlab_pipeline_schedule_variable`](https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/pipeline_schedule_variable).

# `pipelineScheduleVariable` Submodule <a name="`pipelineScheduleVariable` Submodule" id="@cdktf/provider-gitlab.pipelineScheduleVariable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineScheduleVariable <a name="PipelineScheduleVariable" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable"></a>

Represents a {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/pipeline_schedule_variable gitlab_pipeline_schedule_variable}.

#### Initializers <a name="Initializers" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new PipelineScheduleVariable(Construct Scope, string Id, PipelineScheduleVariableConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig">PipelineScheduleVariableConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig">PipelineScheduleVariableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.resetId"></a>

```csharp
private void ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

PipelineScheduleVariable.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

PipelineScheduleVariable.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

PipelineScheduleVariable.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.pipelineScheduleIdInput">PipelineScheduleIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.pipelineScheduleId">PipelineScheduleId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.value">Value</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `PipelineScheduleIdInput`<sup>Optional</sup> <a name="PipelineScheduleIdInput" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.pipelineScheduleIdInput"></a>

```csharp
public double PipelineScheduleIdInput { get; }
```

- *Type:* double

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `PipelineScheduleId`<sup>Required</sup> <a name="PipelineScheduleId" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.pipelineScheduleId"></a>

```csharp
public double PipelineScheduleId { get; }
```

- *Type:* double

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariable.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineScheduleVariableConfig <a name="PipelineScheduleVariableConfig" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Gitlab;

new PipelineScheduleVariableConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Key,
    double PipelineScheduleId,
    string Project,
    string Value,
    string Id = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.key">Key</a></code> | <code>string</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.pipelineScheduleId">PipelineScheduleId</a></code> | <code>double</code> | The id of the pipeline schedule. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.project">Project</a></code> | <code>string</code> | The id of the project to add the schedule to. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.value">Value</a></code> | <code>string</code> | Value of the variable. |
| <code><a href="#@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/pipeline_schedule_variable#id PipelineScheduleVariable#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Name of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/pipeline_schedule_variable#key PipelineScheduleVariable#key}

---

##### `PipelineScheduleId`<sup>Required</sup> <a name="PipelineScheduleId" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.pipelineScheduleId"></a>

```csharp
public double PipelineScheduleId { get; set; }
```

- *Type:* double

The id of the pipeline schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/pipeline_schedule_variable#pipeline_schedule_id PipelineScheduleVariable#pipeline_schedule_id}

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

The id of the project to add the schedule to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/pipeline_schedule_variable#project PipelineScheduleVariable#project}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/pipeline_schedule_variable#value PipelineScheduleVariable#value}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-gitlab.pipelineScheduleVariable.PipelineScheduleVariableConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gitlabhq/gitlab/15.10.0/docs/resources/pipeline_schedule_variable#id PipelineScheduleVariable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



